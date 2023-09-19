
console.log('pink' + 1) // 隐式转换 最后为pink1
console.log(typeof +'123') // 结果为number 因为有+号就会转换为数字类型

let str = '123'
//显示转换<br>
console.log(Number(str)) // 得到的结果就会是数字类型的123
console.log(typeof str)  //结果 ： String
console.log(typeof Number(str)) // 结果 ： number 

// let num1 = prompt("input 1 ")
// let num2 = prompt("input 2 ")
// alert(num1 + num2) // 最后的结果为12 因为prompt输入得到的结果为string类型， 所以需要进行转换才能用于加减
/*
  最简单的方法就是 使用在前面加上一个let num1 = +prompt("input 1 ")
 这样就可以隐式转换为 Number类型
*/
