const fs = require("fs").promises;

const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.log("error: ", error);
    }
};

const writeFile = async (data, path) => {
    const json = JSON.stringify(data);
    await fs.writeFile(path, json);
};

module.exports = { readFile, writeFile };
