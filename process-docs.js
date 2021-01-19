//
// Script to process generated documentation markdown files.
//
// Thanks to Fasst.js.
//

const { readdir, createReadStream, writeFile } = require("fs-extra");
const { createInterface } = require("readline");
const { join, parse } = require("path");

async function main() {
    
    const dir = "./markdown";
    const docFiles = await readdir(dir);
    const idTree = {
        children: {},
    };

    for (const docFile of docFiles) {
        console.log(docFile); //fio:

        const { name: id, ext } = parse(docFile);
        if (ext !== ".md") {
            continue;
        }

        if (id !== "index") {
            const idParts = id.split(".");
            let idsNode = idTree;
            for (let i = 0; i < idParts.length; ++i) {
                const idPart = idParts[i];
    
                if (!idsNode.children[idPart]) {
                    idsNode.children[idPart] = {
                        partId: idPart,
                        fullId: id,
                        children: {},
                    };
                }
                
                idsNode = idsNode.children[idPart];
            }
        }

        const docPath = join(dir, docFile);
        const input = createReadStream(docPath);
        const output = [];
        const lines = createInterface({
            input,
            crlfDelay: Infinity
        });

        let title = "";
        lines.on("line", line => {
            let skip = false;
            if (!title) {
                const titleLine = line.match(/## (.*)/);
                if (titleLine) {
                    title = titleLine[1];
                }
            }

            //TODO: do I need this?
            // const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
            // if (homeLink) {
            //     // Skip the breadcrumb for the toplevel index file.
            //     if (id !== "index") {
            //         output.push(homeLink[1]);
            //     }
            //     skip = true;
            // }

            // See issue #4. api-documenter expects \| to escape table
            // column delimiters, but docusaurus uses a markdown processor
            // that doesn't support this. Replace with an escape sequence
            // that renders |.
            if (line.startsWith("|")) {
                line = line.replace(/\\\|/g, "&#124;");
            }

            // Remove empty HTML comments that seem to cause issues for Docusaurus.
            line = line.replace(/<!-- -->/g, "");
            if (!skip) {
                output.push(line);
            }
        });

        await new Promise(resolve => lines.once("close", resolve));
        input.close();

        const header = [
            "---",
            `id: ${id}`,
            `title: ${title}`,
            `hide_title: true`,
            `slug: ${id === "index" ? "/" : `/${id}`}`,
            "---"
        ];

        console.log("Writing " + docPath); //fio:
        await writeFile(docPath, header.concat(output).join("\n"));
    }

    function processIdTree(idNode, top) {
        return Object.keys(idNode.children)
            .map(key => {
                const child = idNode.children[key];
                const docNode = {};
                const numChildren = Object.keys(child.children).length;
                if (numChildren > 0) {
                    docNode.type =  "category";
                    docNode.label = child.partId;
                    docNode.items = processIdTree(child, false);
                    docNode.collapsed = true;
                }
                else {
                    docNode.type =  "doc";
                    docNode.id = child.fullId;
                };
                
                return docNode;
                
            });
    }

    const idsFileName= join(dir, "ids.json");
    console.log("Writing " + idsFileName);
    await writeFile(idsFileName, JSON.stringify(processIdTree(idTree, true), null, 4));
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error(`Error processing docs.`);
        console.error(err && err.stack || err);
    });
