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