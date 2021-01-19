//
// Script to process generated documentation markdown files.
//
// Thanks to Fasst.js.
//

const { readdir, createReadStream, writeFile } = require("fs-extra");
const { createInterface } = require("readline");
const { join, parse } = require("path");
const { updateIntersectionTypeNode } = require("typescript");

async function main() {
    
    const dir = "./markdown";
    const docFiles = await readdir(dir);
    const idTree = {
        label: "API",
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
                        label: idPart,
                        partId: idPart,
                        isDoc: false,
                        children: {},
                    };
                }

                idsNode = idsNode.children[idPart];

                if (i === idParts.length-1) {
                    idsNode.isDoc = true;
                    idsNode.fullId = id;
                }
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

    function* processIdTree(idNode) {
        for (const key of Object.keys(idNode.children)) {
            const child = idNode.children[key];

            if (child.isDoc) {
                yield {
                    type: "doc",
                    id: child.fullId,
                };
            }

            const numChildren = Object.keys(child.children).length;
            if (numChildren > 0) {
                yield {
                    type: "category",
                    label: child.label,
                    items: Array.from(processIdTree(child)),
                }
            }
        }
    }

    await writeFile(join(dir, "ids.json"), JSON.stringify(Array.from(processIdTree(idTree)), null, 4));
    // await writeFile(join(dir, "id-tree.json"), JSON.stringify(idTree, null, 4));
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error(`Error processing docs.`);
        console.error(err && err.stack || err);
    });
