const pathFile = process.argv[2];

// validate if pathFile error
if (!pathFile) process.exit(-1);

const fs = require("fs");

// console.log(process.argv);

fs.readFile(pathFile, (err, result) => {
    if (err) throw err;

    const arrFile = result.toString().split("\n");
    console.log(arrFile.length - 1);
});

// console.log("FINISH");
