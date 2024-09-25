const url = process.argv[2];
const http = require("http");

const concatStream = require("concat-stream");

http.get(url, (response) => {
    response.pipe(
        concatStream((data) => {
            data = data.toString();
            console.log(data.length);
            console.log(data);
        })
    );
});

// const bl = require("bl");

// http.get(url, (response) => {
//     response.pipe(
//         bl((err, data) => {
//             data = data.toString();
//             console.log(data.length);
//             console.log(data);
//         })
//     );
// });
