/*
Create a file named http-json-api-server.js.

  Write an HTTP server that serves JSON data when it receives a GET request
  to the path '/api/parsetime'. Expect the request to contain a query string
  with a key 'iso' and an ISO-format time as the value.

  For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

  The JSON response should contain only 'hour', 'minute' and 'second'
  properties. For example:

     {
       "hour": 14,
       "minute": 23,
       "second": 15
     }

  Add second endpoint for the path '/api/unixtime' which accepts the same
  query string but returns UNIX epoch time in milliseconds (the number of
  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
  For example:

     { "unixtime": 1376136615474 }

  Your server should listen on the port provided by the first argument to
  your program.
  */

var http = require("http");
var url = require("url");

http.createServer((request, response) => {
    // assign request.url to variable url
    url = url.parse(request.url, true);

    response.writeHead(200, { "Content-Type": "application/json" });
    const time = new Date(url.query.iso);
    if (url.pathname === "/api/parsetime") {
        response.end(
            JSON.stringify({
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds(),
            })
        );
    } else if (url.pathname === "/api/unixtime") {
        response.end(
            JSON.stringify({
                unixtime: time.getTime(),
            })
        );
    }
}).listen(+process.argv[2]);
