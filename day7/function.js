// 函数的相关操作

/**
 * function: 特定任务的代码块
 * shift :函数名
 */
function shift(){
  console.log("函数的封装! ")
}

//求两个数的和
function add( a= 0 , b= 0 ){ //如果声明了之后， 但是并没有赋值， 那么就是undefined
  let res = a + b
  return res
}

//求n 到 m的和
function sum( n , m){
  let res = 0
  for(let i= n; i <= m; i++){
    res += i
  }
  return res
}

//求传入的学生的分数和
function sumSc(score = []){
  let res = 0
  for(let i = 0; i < score.length;i++){
    res += score[i]
  }
  return res
}

//匿名函数，通过变量名进行调用
let fn = function (a= 0 ,b =0 ){
  return a + b
}
console.log("匿名函数的调用",fn(12,21))


//匿名函数之 立即执行函数
//(function (w,d){}(1,2));  //其中的1,2是实参，w,d是形参{}中的为函数体

console.log(shift())

console.log("求两个数的和: ",add(12))
console.log("求n -> m的和: ",sum(1,100))

console.log("求传入学生的分数和")
let arr = [12,21,11]
console.log("小明的总成绩:" ,sumSc(arr))
let arr1 = [121,21,111]
console.log("小hua的总成绩:" ,sumSc(arr1))


console.log(" 转换为Boolean类型",Boolean(""))
console.log(" 转换为Boolean类型",Boolean(false))
console.log(" 转换为Boolean类型",Boolean(true))
console.log(" 转换为Boolean类型",Boolean(NaN))
console.log(" 转换为Boolean类型",Boolean(undefined))
console.log(" 转换为Boolean类型",Boolean())
