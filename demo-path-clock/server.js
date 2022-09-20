const fs = require("fs");
const path = require("path");
const http = require("http");

const server = http.createServer();

server.on("request", function (req, res) {
  const url = req.url;
  console.log(url);
  fs.readFile(path.join(__dirname, "static", url), function (err, data) {
    if (!err) {
      return res.end(data);
    }
    res.end("<h1>404 Not found!!!</h1>");
  });
});

server.listen(8081, function () {
  console.log("server is success, at http://localhost:8081");
});
