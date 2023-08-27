
//事件监听语法
const obj  = {  //
  username: '12',
  password: 123
}
let button = document.querySelector('button')
button.addEventListener('click', function(){ //点击button按钮就会执行一次函数
  alert("弹出对话狂")
  console.log("点击按钮执行")

 })

 let div = document.querySelector('div')
 div.addEventListener('mouseover', function(){
  console.log("鼠标经过打印内容")
 })

 // 焦点事件， 鼠标点击输入框就会触发焦点事件
 let input = document.querySelector('input')
 input.addEventListener('focus' ,function(){
  console.log("输入事件 focus获取焦点 blur 失去焦点")
 })

  // 键盘事件， 鼠标点击输入框就会触发焦点事件
  let input1 = document.querySelector('input')
  input1.addEventListener('keyup' ,function(){
   console.log("输入事件 keyup谈起键盘 keydown 按下键盘")
  })

  元素.addEventListener('click', function(e){
  })