const mw = function (req, res, next) {
  console.log("这是最简单的全局中间件函数");
  const time = Date.now(); // 获取请求到达服务器的时间
  // 为req对象，挂载自定义属性，从而把时间共享给后面所有的路由
  req.startTime = time;
  next();
};

const mw2 = function (req, res, next) {
  console.log(`这是--${req.path.substr(1)}--路由的中间件函数`);
  res.startTime = new Date().getTime()
  next();
};

const mw3 = function (req, res, next) {
  console.log(`这是局部生效的的mw3中间件函数`);
  next();
};

module.exports = {
  mw,
  mw2,
  mw3
};
