// 一、 事件流学习
let dom = document.querySelector('button')
// dom.addEventListener(事件类型,事件处理函数,是否使用捕获机制)
dom.addEventListener('click', function(e /*e 就是事件对象。 */){
  console.log("打印事件对象的内容: ",e)
  
})

let input = document.querySelector('input')
input.addEventListener('keyup', function(e){ //点击键盘触发
  // console.log("点击键盘触发的事件")
  // console.log("触发内容: ",e.key) // 获取键内容
  /**
   * 只需要按Enter才触发内容。
   * 比如： 发布评论的时候， 一般我们按回车键才会触发
   * 
   */
    if('Enter' === e.key){
      alert("确认发布吗? ")
      console.log("发布")
    }


}) 


let ul =  document.querySelector('ul')
ul.addEventListener('click',function(e){
  console.log("点击事件")
  console.log(e.target.tagName === 'LI') //返回为true ，就是我们点击的li
  if(e.target.tagName === 'LI'){
    e.target.style.color = 'red' //target 就是我们点击的哪个小 li ， 这样就可以实现点击哪个哪个变色

  }
  // this.style.color = 'red'
})



window.addEventListener('load',function(){
  //页面加载事件
  //...需要执行的页面加载内容

})


window.addEventListener('scroll',function(){
  //页面滚动事件
  //...需要执行的页面滚动内容
  console.log(document.documentElement.scrollTop)

})