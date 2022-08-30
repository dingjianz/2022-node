/* 
  fs模块是Node.js官方提供的、用来操作文件的模块。
  它提供了一系列的方法和属性，用来满足用户对文件的操作需求。
  例如：
    - fs.readFile()方法，用来读取指定文件中的内容
      fs.readFile(path[, options], callback)
      参数1：path: 必选参数，字符串，表示文件的路径；
      参数2：可选参数，表示以什么编码格式来读取文件；
      参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果。
*/
const fs = require('fs');

fs.readFile('./file/1.txt', 'utf-8', function (err, dataStr) {
  // 读取成功，则err的值为null
  // 读取失败，则err的值为错误对象
  /* 
    [Error: ENOENT: no such file or directory, open 'D:\2022-node\file\1.txts'] {
      errno: -4058,
      code: 'ENOENT',
      syscall: 'open',
      path: 'D:\\2022-node\\file\\1.txts'
    }
  */
  if (err) {
    return console.log('读取文件失败！' + err.message);
  }
  console.log('读取文件成功' + dataStr);
})

/* 
  - fs.writeFile()方法，用来向指定的文件中写入内容，若没有文件会创建文件
    fs.writeFile(file, data[,options], callback)
    参数1：必选参数，需要制定一个文件路径的字符串，表示文件的存放路径
    参数2：必选参数，表示要写入的内容
    参数3：可选参数，表示以什么格式写入文件内容，默认是uft-8
    参数4：必选参数，文件写入完成后的回调函数
*/

fs.writeFile('./file/2.sstxt', '我热爱学习！', 'utf-8', function(err) {
  // 若文件写入成功，则err的值为null
  // 若文件写入失败，则err的值为一个错误对象
  console.log(err);
})
