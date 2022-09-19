/* 
  1. 什么是express?
    官方给出的概念：Express是基于Node.js平台，快速、开放、极简的Web开发框架。
    通俗的理解：Express的作用和Node.js内置的http模块类似，是专门用来创建Web服务器的。
    Express的本质：就是一个npm上的第三方包，提供了快速创建Web服务器的便捷方法。

  2. 进一步理解Express
    思考：不使用Express能否创建Web服务器？
    答案：能，使用Node.js提供的原生http模块即可。

    思考：有了http模块，为什么还用Express?
    答案：http内置模块用起来很复杂，开发效率低；Express是基于内置的http模块进一步封装出来的，能够极大的提高开发效率。

    思考：http内置模块和express是什么关系？
    答案：类似于浏览器中web api和jQuery的关系，后者是基于前者进一步封装出来的。

  3. Express能做什么？
    对于前端程序员来说，最常见的两种服务器，分别是：
    - web网站服务器：专门对外提供web网页资源的服务器。
    - api接口服务器：专门对外提供api接口的服务器。
    使用express，我们可以方便、快速的创建web网站的服务器或api接口的服务器。
*/