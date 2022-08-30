/* 
  __dirname 表示当前文件所处的目录
*/
const fs = require('fs')
const path = require('path')

console.log(path.resolve(__dirname, './file/1.txt'))

fs.readFile(path.resolve(__dirname, './file/1.txt'), 'utf8', function (err, data) {
  console.log(data)
})
