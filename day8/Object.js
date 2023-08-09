let object1 = {
  uname: 'rayce',
  age: 12,
  gender: '男',
  sex: '',
  'user-name': 12,
  fun: function (){
    console.log("这是对象的方法， 其中的方法名为sum")
  }
}
console.log(object1)
console.log(object1['user-name'])
object1.fun()

console.log("动态添加属性和方法")
 // 声明一个空的对象（没有任何属性，也没有任何方法）
 let user = {}
 // 动态追加属性
 user.name = '小明'
 user['age'] = 18
 
 // 动态添加方法
 user.move = function () {
   console.log('移动一点距离...')
 }

let arr = [123,1231,121]
 for (const key in arr) {
    console.log("key == ", key) // key是数组下标的索引， 但是是字符串的'0' , '1'... 所以最好不要使用这个来遍历数组。 而是遍历对象
 }

 //todo 遍历对象的方法
 for (const key in object1) {
  //key ==>  'uname' , 'age', 'gender' ......
    console.log(object1[key]) //可以打印出对应key的value
  }