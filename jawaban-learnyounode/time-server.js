// console.log(
//     new Date().toLocaleDateString("NL", {
//         year: "numeric",
//         month: "2-digit",
//         day: "2-digit",
//         hour: "2-digit",
//         minute: "2-digit",
//     })
// );
// "2013-07-06 17:42"

const net = require("net");
const port = process.argv[2];

const server = net.createServer((socket) => {
    const date = new Date();

    const year = date.getFullYear(); // 2013
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // 07
    const day = ("0" + date.getDate()).slice(-2); // 06
    const hour = ("0" + date.getHours()).slice(-2); // 17
    const minute = ("0" + date.getMinutes()).slice(-2); // 42

    socket.end(`${year}-${month}-${day} ${hour}:${minute}\n`);
});

server.listen(port);
