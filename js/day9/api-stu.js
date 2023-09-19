const arr = ['123','ada','1312ad']
console.log(arr.push('213'))
console.log(arr.shift())
console.log(arr)


const obj = {
  username: 'xiaomign1',
  age: 'man'
}

console.log(obj)
obj.numer = 123
console.log(obj)


let div = document.querySelector('h1')
console.log(div.innerText)
div.style.color = 'red'

let rr= document.querySelectorAll('h1')
for(let i=0 ; i< rr.length;i++){
  console.log(rr[i].innerHTML)
  rr[i].style.color = 'red'
}

//获取输入框中的内容
const username = document.querySelector('input')
console.log(username.value) //username.innerHTML得不到表单的内容，只能通过username.value
username.value = '我要买电脑' //设置表单的值
username.type = 'password' //修改类型为password类型
console.log(username.value)
