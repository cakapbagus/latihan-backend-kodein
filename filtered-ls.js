const pathDir = process.argv[2];
const extension = process.argv[3];

const fs = require("fs");
fs.readdir(pathDir, (err, files) => {
    if (err) throw err;

    for (const fileName of files) {
        // console.log(fileName.split(".").at(-1));
        const arrFileName = fileName.split(".");
        if (arrFileName.length > 1 && arrFileName.at(-1) === extension) {
            console.log(fileName);
        }
    }
});
