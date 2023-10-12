/**
 * TODO: path模块(路径模块) 
 *  使用 path 模块来得到绝对路径
为什么在 Node.js 待执行的 JS 代码中要用绝对路径：
  > Node.js 执行 JS 代码时，代码中的路径都是以终端所在文件夹出发查找相对路径，而不是以我们认为的从代码本身出发，会遇到问题，
  所以在 Node.js 要执行的代码中，访问其他文件，建议使用绝对路径
 * 
 */
const fs = require('fs')
const path = require('path') // 加载模块
//使用模块方法
path.join(__dirname,'readme')  //拼接路径
console.log(__dirname) //得到的是当前终端界面所在的路径
//2、 读取文件
fs.readFile(path.join(__dirname,'./nodeTest.js'), (error, data)=>{
    //如果没有异常， error就是null
    console.log("读取文件的内容: "+ data.toString())
    const htmlStr = data.toString()
    // 1.2 使用正则替换内容字符串里的，回车符\r 换行符\n
    const resultStr = htmlStr.replace('',/[\r\n]/g)
    //   1.3 确认后，写入到 dist/index.html 内
    fs.writeFile(path.join(__dirname, './nodeTest.js'), resultStr, err => {
    if (err) console.log(err)
  })

})
