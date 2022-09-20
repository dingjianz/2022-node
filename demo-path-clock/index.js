const fs = require('fs')
const path = require('path')

const regStyle = /<style lang="css">[\w\W]*<\/style>/g;
const regScript = /<script>[\w\W]*<\/script>/g;

// 方法1
const resolveCss = (htmlStr) => {
  const r1 = regStyle.exec(htmlStr)
  if (Array.isArray(r1)) {
    const newCss = r1[0].replace('<style lang="css">', '').replace('</style>', '')
    fs.writeFile(path.join(__dirname, '/static/index.css'), newCss, 'utf8', function(err) {
      console.log(err)
    })
  }
}

// 方法2
const resolveJs = (htmlStr) => { 
  const r1 = regScript.exec(htmlStr)
  if (Array.isArray(r1)) {
    const newJs = r1[0].replace('<script>', '').replace('</script>', '')
    fs.writeFile(path.join(__dirname, '/static/index.js'), newJs, 'utf8', function(err) {
      console.log(err)
    })
  }
}

// 方法3
const resolveHTML = (htmlStr) => {
  const newHTML = htmlStr.replace(regScript, '<script src="./index.js"></script>').replace(regStyle, '<link rel="stylesheet" href="./index.css">')
  fs.writeFile(path.join(__dirname, '/static/index.html'), newHTML, 'utf8', function(err) {
    console.log(err)
  })
}

// 读取文件
fs.readFile(path.resolve(__dirname, './index.html'), 'utf8', function (err, data) {
  if (!err) {
    resolveCss(data)
    resolveJs(data)
    resolveHTML(data)
  }
})
