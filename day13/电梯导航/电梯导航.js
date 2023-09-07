//电梯导航内容：
/**
 *  <ul class="xtx-elevator-list">
      <li><a href="javascript:;" data-name="new">新鲜好物</a></li>
      <li><a href="javascript:;" data-name="popular">人气推荐</a></li>
      <li><a href="javascript:;" data-name="brand">热门品牌</a></li>
      <li><a href="javascript:;" data-name="topic">最新专题</a></li>
      <li><a href="javascript:;" id="backTop"><i class="sprites"></i>顶部</a></li>
    </ul>
 */

/**
 * 第一模块
 * 页面滑动 的显示和 隐藏
 * 
 * 
 */


//1. 获取电梯内容
const elevator = document.querySelector('.xtx-elevator')

//2. 给页面添加滚动事件
// 当页面滚动大于300px ， 就显示电梯导航。
window.addEventListener('scroll',function(){
  //被卷曲内容头部大于300px
  const n = document.documentElement.scrollTop
 
  //滚动到xtx_entry这个盒子的300 像素就显示电梯导航的实现方法
  const temp = document.querySelector('.xtx_entry')
  console.log("xtx_entry的大小: ", temp.offsetTop)
  if(n >= temp.offsetTop){
    elevator.style.opacity = 1
  }else{
    elevator.style.opacity = 0
  }

})

/**
 * 点击返回页面顶部
 */
//1. 获取元素
const backTop = document.querySelector('#backTop') 

backTop.addEventListener('click', function(){
  document.documentElement.scrollTop = 0 //直接就可以返回顶部
})



/**
 * 第二模块
 * time: 2023.9.4
 *  点击导航对应的导航， 会跳转到对应的大模块位置。
 */

//1. 点击页面可以实现滑动的函数

const list = document.querySelector('.xtx-elevator-list')
list.addEventListener('click' ,function(e){
  console.log("点击对应的小模块")
  //如果获取不到active 就不去删除， 直接添加。
  const old = document.querySelector('.xtx-elevator-list .active')
  if(old){
    old.classList.remove('active')
  }else{
    e.target.classList.add('active')
  }
  
})































