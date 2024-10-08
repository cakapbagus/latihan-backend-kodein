// fetch json from API http://api.aladhan.com/v1/timingsByCity/{date}

const http = require("http");
const url = require("url");

// const server = http.createServer((request, response) => {
//     const urlObj = url.parse(request.url, true);
//     const query = parse(urlObj.query);
//     const city = query.city;
//     const date = query.date;
//     const url = `http://api.aladhan.com/v1/timingsByCity/${date}?city=${city}`;
const date = new Date();
// DD-MM-YYYY
const formattedDate =
    ("0" + date.getDate()).slice(-2) +
    "-" +
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "-" +
    date.getFullYear();

console.log(formattedDate);

//     http.get(url, (res) => {
//         res.setEncoding("utf8");
//         res.on("data", (data) => {
//             // data = JSON
//             const jadwal = JSON.parse(data);
//             response.end(JSON.stringify(jadwal.data.timings));
//         });
//     }).on("error", (err) => {
//         console.log(err);
//     });
// });

// server.listen(3000);
