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
