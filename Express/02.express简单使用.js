const express = require("express");

const app = express();

app.listen(8001, function () {
  console.log("express server running at http://localhost:8001");
});

app.get("/user", function (req, res) {
  res.send(`<h1>hello world --- ${req.query.name}</h1>`);
});

app.get("/user/:id/:name", function (req, res) {
  res.send(`<h1>
    id --- ${req.params.id}<br>
    name --- ${req.params.name}
  </h1>`);
});


// http://localhost:8001/index.html 直接访问到了 /demo-path-clock/index.html
app.use(express.static('../demo-path-clock'));
