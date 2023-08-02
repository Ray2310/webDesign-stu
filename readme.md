# 前端学习代码存放处
# day1
> 之前的html + CSS 
按钮中的class 就是通过 css中的 .XXX{来完成的: pink; ...}

# day2内容总结

1. alert("这是外部js 的弹出内容") 他会从会话框弹出里面输入的内容

> 如果有多个alert， 那么他就会依次输出， 但是前提是你点击了确定按钮


2. js中的结束符 和 java中的结束符是一样的以 `;` 结束。 但是为了后面的vue学习， 还是不要加了


3. js的输入输出语法： 我问你答交互式效果

> Document.write("向body中要输出的内容（里面也可以写标签，他会自动被解析）")

> alert("弹出警示的会话框")

> console.log('控制台打印输出的内容') 相当于java中的sout()； 输出的内容在浏览器的控制台中。



4.  输入的语法 ： prompt('请输入你要输入的内容')

> // 输入输出内容， 将输入的内容保存到> 变量中， 然后输出。
 > var lot = prompt('cout你的黔灵12')
document.write(lot)



5. 字面量: 数组字面量、对象字面量、字符串字面量、数字字面量等等(计算机中描述看到的内容...)


6. 变量

> **在js中可以通过var 或者 let 来定义变量，作为一个容器保存要保存的内容。** 通过对用户输入数据的获取， 然后将数据保存起来， 在后续使用




## JS中的代码执行顺序
1. **按html文档流执行js代码**
2. **alert 和 prompt 他们会跳过页面渲染 先被执行**



# day3
多个变量可以通过`,`来分别
```
// 1. 用户输入 
//2. 保存内部处理 
let uname = prompt('请用户输入姓名: ')
let passwd = prompt('输入密码')

//3. 打印输出
document.write('用户名:' ,uname, '\n密码: ' , passwd) /*如果定义了 ，但是用户没有输入， 那么输出的内容就会是null ; 如果写错了 ，那么就会通过浏览器的控制台检查*/

```

1. **如何设置多个变量**
> 在java语言中， 可以通过数组、集合等多种形式来表示多个变量， 在js中可以通过


