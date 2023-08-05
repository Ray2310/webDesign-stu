let arr = [1,2,3,4,5]
for(let i = 0 ; i < arr.length;i++){
 // alert(arr[i])
  console.log(`数组操作的第${i}个元素为: ${arr[i]} 他的类型是 ${typeof(arr[i])}`)
}
console.log("向数组中push内容")
arr.unshift("adad") // 将元素添加到数组的开头， 并且也是返回数组的大小。
arr.push(2,123) //表示直接添加两个元素， 默认添加到数组的尾部。返回为new数组的长度。

console.log("操作后打印")

//arr.shift() //删除数组中的首位元素
//arr.splice(2,2) // 从第2个开始(索引是从0开始)， 然后删除两个
arr.pop()   //删除数组中的最后一个元素
// for(let i = 0 ; i < arr.length;i++){
//   // alert(arr[i])
//    console.log(`数组操作的第${i}个元素为: ${arr[i]} 他的类型是 ${typeof(arr[i])}`)
//  }
console.log(arr) //也可以直接打印出来， 同时
//使用函数的方法使得降序
arr.sort(function (a,b){
   return b - a
})
console.log(arr)