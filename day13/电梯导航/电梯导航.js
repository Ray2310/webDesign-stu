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
//1. 获取电梯内容
const elevator = document.querySelector('.xtx-elevator')

//2. 给页面添加滚动事件
// 当页面滚动大于300px ， 就显示电梯导航。
window.addEventListener('scroll',function(){
  //被卷曲内容头部大于300px
  const n = document.documentElement.scrollTop
  if(n >= 300){
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





