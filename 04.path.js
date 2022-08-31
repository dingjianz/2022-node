/*
  path模块是Node.js官方提供的、用来处理路径的模块。
  它提供了一些列的方法和属性，用来满足用户对路径的处理需求。
  例如: 
    path.join()方法，用来将多个路径片段拼接成一个完整的路径字符串
    path.basename()方法，用来从路径字符串中，将文件名解析出来
*/

const path = require('path')


// path.join([...paths])
// join是把各个path片段连接在一起， resolve把/当成根目录

console.log(path.join(__dirname, '/file/1.txt')); // D:\2022-node\file\1.txt
console.log(path.resolve(__dirname, '/file/1.txt')); // D:\file\1.txt


// 注意： ../ 会抵消前面的一层路径
const pathStr = path.join('/a', '/b/c', '../', './/d', '/////e')
console.log(pathStr); // /a/b/d/e

const pathStr2 = path.join(__dirname, './file/1.txt')
console.log(pathStr2); // D:\2022-node\file\1.txt

const pathStr3 = path.resolve(__dirname, './file/1.txt')
console.log(pathStr3); // D:\2022-node\file\1.txt

console.log(__filename) // D:\2022-node\04.path.js


/* 
  path.basename(path[,ext]) 可以获取路径中的最后一部分，经常通过这个方法获取路径中的文件名
    path<string>必选参数，表示一个路径的字符串
    ext<string>可选参数，表示文件扩展名
*/


const filePath = '/a/b/c/index.html'

const fullname = path.basename(filePath)
console.log(fullname); // index.html

const nameWithoutExt = path.basename(filePath, '.html')
console.log(nameWithoutExt) // index

/* 
  path.extname(path) 可以获取路径中的扩展名部分
    path<string>必选参数，表示一个路径的字符串
*/

const fext = path.extname(filePath)
console.log(fext); // .html