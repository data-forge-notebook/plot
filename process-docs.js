//
// Script to process generated documentation markdown files.
//
// Thanks to Fasst.js.
//

const { readdir, createReadStream, writeFile, readFile, remove, ensureDir } = require("fs-extra");
const { createInterface } = require("readline");
const { join, parse } = require("path");

async function main() {

    const jsonInputDir = "./input";
    const docsInputDir = "./markdown";
    const docsOutputDir = "./docs-src/docs";

    await remove(docsOutputDir);
    await ensureDir(docsOutputDir);

    const jsonFiles = await readdir(jsonInputDir);
    const typeLabels = {};

    function processMember(member) {
        if (member.name) {
            const name = member.name.trim();
            if (name.length > 0) {
                typeLabels[name.toLowerCase()] = name;
            }
        }

        if (member.members) {
            for (const child of member.members) {
                processMember(child);
            }
        }
    }

    for (const jsonFile of jsonFiles) {
        const apiData = JSON.parse(await readFile(join("./input", jsonFile)));
        processMember(apiData);
    }

    const docFiles = await readdir(docsInputDir);
    const idTree = {
        label: "API",
        children: {},
    };

    for (const docFile of docFiles) {
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
                        label: typeLabels[idPart] || idPart,
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

        const docInputPath = join(docsInputDir, docFile);
        const input = createReadStream(docInputPath);
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

        const titleParts = title.split(".");
        const nestedTitleParts = titleParts[titleParts.length-1].split(" ");
        const extractedTitle = nestedTitleParts[0];

        const header = [
            "---",
            `id: ${id}`,
            `hide_title: true`,
            `title: ${id ==="index" ? "API Reference" : extractedTitle}`,
            `slug: ${id === "index" ? "/" : `/${id}`}`,
            "---"
        ];

        const docOutputPath = join(docsOutputDir, docFile);
        console.log(`>> ${docOutputPath}`);
        await writeFile(docOutputPath, header.concat(output).join("\n"));
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

    const idsOutputFile = join(docsOutputDir, "ids.json");
    console.log(`>> ${idsOutputFile}`);
    await writeFile(idsOutputFile, JSON.stringify(Array.from(processIdTree(idTree)), null, 4));
    // await writeFile(join(dir, "id-tree.json"), JSON.stringify(idTree, null, 4));
}

main()
    .then(() => console.log("Done"))
    .catch(err => {
        console.error(`Error processing docs.`);
        console.error(err && err.stack || err);
    });
