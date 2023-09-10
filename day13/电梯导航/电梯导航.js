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
  // console.log("xtx_entry的大小: ", temp.offsetTop)
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
 * 
 * 实现 : 
 * 1. 通过事件委托的方式 ， 点击子目录li 委托给父目录 ul 来实现 。然后实现点击li
 * 需要实现的内容(我们这里需要实现跳转到对应的大模块)
 * 2. 实现的核心思想就是把对应offsetTop的值给document.documentElement.scrollTop
 *  通过自定义属性找到大盒子和小盒子的对应关系 。 
 * 比如: 人气推荐 大盒子的class属性为:xtx_goods_popular 小盒子的自定义属性为data-name="popular"
 * 把自定义属性的值给大盒子就可以找到大盒子了
   //获得小盒子的自定义属性
  console.log(e.target.dataset.name)
  //获取大盒子的offsetTop值
  const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
  //让页面滚动到对应位置
  document.documentElement.scrollTop = top
 * 
 * 上述实现会导致 顶部的这个盒子也移动到最上面去， 所以需要移除
 *   if(e.target.tagName === 'A' && e.target.dataset.name){
 * 
 *  
 * }
 * 
 * 
 */

//1. 点击页面可以实现滑动的函数

const list = document.querySelector('.xtx-elevator-list')
list.addEventListener('click' ,function(e){
  console.log("点击对应的小模块")
  if(e.target.tagName === 'A' && e.target.dataset.name){
    //排他思想
    //如果获取不到active 就不去删除， 直接添加。
    const old = document.querySelector('.xtx-elevator-list .active')
    if(old){
      old.classList.remove('active')
    }
    e.target.classList.add('active')
    
    //通过小盒子找到大盒子
    //获得小盒子的自定义属性
    console.log(e.target.dataset.name)
    //获取大盒子的offsetTop值
    const top = document.querySelector(`.xtx_goods_${e.target.dataset.name}`).offsetTop
    //让页面滚动到对应位置
    document.documentElement.scrollTop = top
  } 
})



//todo 2. 页面滚动， 可以通过大盒子选小盒子 添加action
window.addEventListener('scroll', function(){
  //先获取active 然后移除 类
  const old = document.querySelector('.xtx-elevator-list .active')
  //判断原来的类是否有active对象
  if(old){
    old.classList.remove('active')
  }
// 假设如果页面滚动 > 新鲜好物大盒子的offsetTop 并且小于 人气推荐的offsetTop就把对应的小盒子选出来
  //获取四个大盒子的位置
  const news = document.querySelector('.xtx_goods_new')
  const popular = document.querySelector('.xtx_goods_popular')
  const brand = document.querySelector('.xtx_goods_brand')
  const topic = document.querySelector('.xtx_goods_topic')
  
  const n = document.documentElement.scrollTop
  //选择第一个小盒子
  if(n >= news.offsetTop && n < popular.offsetTop){
    //属性选择器
    document.querySelector('[data-name=new]').classList.add('active')
  }
  
  else if(n >= popular.offsetTop && n < brand.offsetTop){
    //属性选择器
    document.querySelector('[data-name=popular]').classList.add('active')
  }
  
  else if(n >= brand.offsetTop && n < topic.offsetTop){
    //属性选择器
    document.querySelector('[data-name=brand]').classList.add('active')
  }
  
  else if(n < topic.offsetTop){
    //属性选择器
    document.querySelector('[data-name=topic]').classList.add('active')
  }


})































