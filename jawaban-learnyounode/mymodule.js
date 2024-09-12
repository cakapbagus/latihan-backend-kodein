const fs = require("fs");
const path = require("path");

const myFunction = (dirName, ext, callback) => {
    fs.readdir(dirName, (err, data) => {
        if (err) {
            return callback(err);
        }

        // let result = [];
        // for (const fileName of data) {
        //     const arrFileName = fileName.split(".");
        //     if (arrFileName.length > 1 && arrFileName.at(-1) === ext) {
        //         result.push(fileName);
        //     }
        // }

        callback(
            null,
            data.filter((name) => {
                return "." + ext === path.extname(name);
            })
        );
    });
};

module.exports = myFunction;
