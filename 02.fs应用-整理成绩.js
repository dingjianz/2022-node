const fs = require("fs");

fs.readFile("./file/成绩.txt", 'utf8',  function (err, data) {
  if (err) {
    return console.log("成绩读取失败");
  }
  const arr = []
  
  data.split(' ').forEach(item => {
    arr.push(item.replace('=', '：'))
  });

  const content = arr.join('\r\n')

  fs.writeFile('./file/成绩-ok.txt', content, 'utf8', function(err) {
    if (err) {
      console.log('文件写入失败');
    }
  })
});
