// 间歇函数学习
// alert("打开间歇函数")
//方式一:  匿名函数
//setInterval(function(){
//    console.log(`现在时间为`)
//},1000) // 默认单位为毫秒
//第二中方式
let time = 10
function fn(){ 
    // console.log('现在时间为')
    console.log(`时间为 ${time--}`)
    if(time < 0){
        console.log("stop")
        clearInterval(num)
    
    }
}
let num = setInterval(fn,1000)


// for(let i =1; i < 100 ;i++){
//     //console.log(i++)
// }

