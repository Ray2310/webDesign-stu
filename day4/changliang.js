

//常量的定义： 
const pi = 3.14
console.log('常量的值为: ',pi)


let res = 0
let x = prompt("请输入x")
let y = prompt("请输入y")
res = x+y // 如果计算错误（也就是两个变量类型不一致进行运算的话， 就会输出NaN）     
document.write(res) //x y 为什么会被解析成为字符串类型?  因为它在解析的时候会解析内容为string类型
 
console.log('x的数据类型是 ： ' + typeof x +' y的类型是 ： ' +  typeof y)
let str1 = 'adada'
let str2 = 'adddd'
console.log(typeof str1)
let str4 = str1 + str2
console.log(str4)


let bool = true
bool = false
console.log(bool)





