// window对象相关内容
console.log(document === window.document)
//延迟函数  只执行一次
let timer= setTimeout(function(){
  console.log("2s后打印")
},2000)

//清除延迟函数
clearTimeout(timer)

console.log("location的各部分组成: ",window.location)

//2 
const a = document.querySelector('a')
//声明倒计时变量 
let num = 5 
// let wlcs= setInterval(function(){
//   num--
//   a.innerHTML = `支付成功,跳转`
//   if(num === 0){
//     clearInterval(wlcs)
//     //跳转
//     location.href = 'https://wclspace.xyz'

//   }

// },1000)

//navigator对象
console.log(window.navigator)

//匿指定函数
!(function(){
  console.log("update")
})();
obj = {
  user: '123',
  age: 21,
  gender: 'g'

}

localStorage.setItem('username','Rayce')
const name= localStorage.getItem('username')
console.log(name)
//删除
localStorage.removeItem('username')
//改就是seItem
console.log(typeof localStorage.getItem('username')) //得到的是对象类型

//同过这样的方式就可以将对象的内容存储进去
localStorage.setItem('username1',JSON.stringify(obj))
console.log(typeof localStorage.getItem('username1'))

//如果想要将json字符串转换为对象。 通过JSON.parse()转
console.log(JSON.parse(localStorage.getItem('username1')))



/**
 * 9.14 日stu
 * 
 */


const arr =[123,312,222]
const newArr = arr.map(function(ele , index){ 
  return ele+ '颜色' + index
})
console.log(arr)
console.log(newArr) // 处理数据后返回一个新的数组

