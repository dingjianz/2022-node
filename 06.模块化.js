/* 
  提高了代码的复用性
  提高了代码的可维护性
  可以实现按需加载


  Node.js 中根据模块来源的不同，将模块分为了三大类，分别是：
    1. 内置模块(内置模块使用nodeJs官方提供的，例如fs、path、http等)
    2. 自定义模块（用户创建的每个.js文件，都属于自定义模块）
    3. 第三方模块(由第三方开发出来的模块，并非官方提供的内置模块，也不是用户创建的自定义模块，使用前需先下载)

  加载模块
    使用强大的require方法，可以加载 内置模块、自定义模块、第三方模块

  module.exports对象
    在自定义模块当中，可以使用module.exports对象，将模块内的成员共享出去，供外界使用。
    外界使用require()方法导入自定义模块时，得到的就是module.exports所指向的对象。
    默认情况下，module.exports = {}
  
  exports对象
    由于module.exports单词写起来比较复杂，为了简化向外共享成员的代码，Node提供了exports对象。
    默认情况下exports和module.exports指向同一个对象。
    最终共享结果，还是以module.exports指向的对象为准。

     console.log(module.exports === exports) // true
    
*/

/* 
  *** console.log(module)
  {
    id: 'D:\\2022-node\\06.模块化.js',
    path: 'D:\\2022-node',
    exports: { a: 123, b: 456 },
    filename: 'D:\\2022-node\\06.模块化.js',
    loaded: false,
    children: [],
    paths: [ 'D:\\2022-node\\node_modules', 'D:\\node_modules' ]
  }
*/


// module.exports.username = 'jianding9' // 不生效

// 让module.exports指向一个全新的对象

exports.ausername = "jianding9"; // 实践：exports只能这样赋值，直接 = {},无法生效

module.exports = {
  gender: '男',
  age: 22
}

