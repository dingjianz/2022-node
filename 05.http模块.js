/* 
  1. 回顾：什么是客户端，什么是服务器？
    在网络节点中，负责消费资源的电脑，叫做客户端；
    负责对外提供网络资源的电脑，叫做服务器。

    服务器和普通电脑的区别在于，服务器上安装了web服务器软件，例如：IIS、Apache等。
    通过安装这些服务器软件，就能把一台普通的电脑编程一台web服务器了。

    在node.js中，我们不需要使用IIS、Apache等这些第三方web服务器。
    因为我们可以基于Node.js提供的ttp模块，通过几行简单的代码，就能轻松的手写一个服务器软件，从而对外提供web服务。

    http模块是Node.js官方提供的、用来创建web服务器的模块。
    通过http模块提供的http.createServer()方法，就能方便的把一台普通的电脑，变成一台web服务器，从而对外提供web资源服务。

  2. 服务器相关的概念
    2.1 IP地址
      IP地址就是互联网上每台计算机的唯一地址，因为IP地址具有唯一性。如果把“个人电脑”比作“一台电话”，那么IP地址就相当于“电话号码”，只有知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信。
      IP地址的格式：通常用“点分十进制”表示成(a,b,c,d)的形式，其中，a,b,c,d都是0~255之间的十进制整数。
      例如：用点分十进制表示的IP地址(192.168.1.1)
    注意：
      2.1.1 互联网中每台web服务器，都有自己的IP地址，ping www.baidu.com 即可查看到百度服务器的IP地址。
      2.1.2 在开发期间，自己的电脑既是一台服务器，也是一个客户端，为了方便调试，可以在自己的浏览器中输入127.0.0.1这个ip地址，就能把自己的电脑当做一台服务器进行访问了。

    2.2 域名和域名服务器
      尽管IP地址能够唯一地标记网络上的计算机，但是IP地址是一长串数字，不直观，而且不方便记忆，于是人们又发明了另一套字符型的地址方案，即所谓的域名（domain name）地址。
      IP地址和域名是一一对应的关系，这份对应关系存放在一种叫做域名服务器（DNS,Domain name server）的电脑中。
      使用者只需通过好记的域名访问对应的服务器即可，对应的转换工作由域名服务器实现。因此，域名服务器就是提供IP地址和域名之间的转换服务的服务器。
    注意：
      2.2.1 单纯的使用IP地址，互联网中的电脑也能够正常工作，但是有了域名的加持，能让互联网的世界变得更加方便。
      2.2.2 在开发测试期间，127.0.0.1对应的域名是localhost，它们都代表我们自己的这台电脑，在使用效果上没有任何区别。


  3. req请求对象
    如果想在事件处理函数中，访问与客户端相关的数据或属性，可以使用req
  
  4. res响应对象
    在服务器的request事件处理函数中，如果想访问与服务器相关的数据或属性，可以使用res
*/

// 1. 导入http模块
const http = require("http");

// 2. 创建web服务器实例
const server = http.createServer();

// 3. 为服务器实例绑定request事件，监听客户端的请求
server.on("request", (req, res) => {
  /* 
    req是请求对象，它包含了与客户端相关的数据和属性，例如：
      req.url 是客户端请求的url地址(从端口号开始)
      req.method 是客户端的method请求类型
  */

  // res.end(`Your request url is ${req.url}, and request method is ${req.method}`)

  // 为解决中文乱码问题，需要手动设置内容的编码格式
  res.setHeader('Content-Type', 'text/html;charset=utf-8')
  // res.end('./demo-path-时钟案例/index.html')

  const url = req.url;
  let content = `<h1>404 Not found!</h1>`
  if (url === '/' || url === '/index.html') {
    content = `<h1>首页</h1>`
  } else if (url === '/about.html') {
    content = `<h1>关于页面</h1>`
  }
  res.end(content)
});

// 4. 启动服务器
server.listen(8080, () => {
  console.log("htpp server running at http://127.0.0.1:8080");
});
