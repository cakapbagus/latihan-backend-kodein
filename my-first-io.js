const pathFile = process.argv[2];

// validate if pathFile error
if (!pathFile) process.exit(-1);

const fs = require("fs");

// console.log(process.argv);

const objBufferedFile = fs.readFileSync(pathFile);

// console.log(objBufferedFile.toString());
const str = objBufferedFile.toString();

// console.log(str.split("\n"));

const arrFile = str.split("\n");
// console.log(arrFile.length - 1);

// 1-line solution
const fs = require("fs");
console.log(
    process.argv[2]
        ? fs.readFileSync(process.argv[2]).toString().split("\n").length - 1
        : process.exit()
);
