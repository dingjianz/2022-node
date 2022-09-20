const express = require("express");
const app = express();
const router = require("./03.模块化路由");
const { mw, mw2, mw3 } = require("./04.middleware");

app.listen(8001, function () {
  console.log("express server running at http://localhost:8001");
});

// 实践注意：不能在路由后注册，否则将不生效
app.use(mw); // 将mw注册为全局生效的中间件

// mw2注册为局部生效的中间件
app.get("/user", [mw2, mw3], function (req, res) {
  res.send(
    `<h1>hello world --- ${req.query.name || "默认名字"}<br>${res.startTime}</h1>`
  );
});

app.get("/users/:id/:name", function (req, res) {
  res.send(`<h1>
    id --- ${req.params.id}<br>
    name --- ${req.params.name}
  </h1>`);
});

// http://localhost:8001/index.html 直接访问到了 /demo-path-clock/index.html
// app.use('/abc', express.static('../demo-path-clock')); // 添加路径
app.use(express.static("../demo-path-clock"));

app.use(router); // 模块化路由
// app.use("/api", router); // 模块化路由添加前缀
