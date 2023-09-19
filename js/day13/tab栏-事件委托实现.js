// 优化tab ， 实现使用事件委托的方式书写
// 实现事件委托是委托给ul（父标签， 而不是li 子标签）
//todo 需求通过点击每个li标签中的a， 实现active的切换 和 里面内容的切换


//1.1 获取元素
let ul = document.querySelector('ul')
//1.2 获取所有的item 
let items = document.querySelectorAll('.tab-content .item')
//2.添加点击事件
ul.addEventListener('click', function(e){
  //2.1 我们实现监听的是e.target. 也就是里面的小a
  // console.log(e.target) // 点击哪个对象， 哪个就是e.target
  //2.2 指定我们需要操作的对象（通过e.target.tagName指定 ）
  if(e.target.tagName === 'A'){
    //2.3 进行排他思想。 先移除原始的active， 然后再给现在的添加active
    document.querySelector('.tab-nav .active').classList.remove('active')
    //TODO 注意 e.target就是当前的标签
    e.target.classList.add('active')  


  //3. 实现事件委托
    //3.1 通过自定义属性实现 data-id="0" .就可以拿到我们点击的那个a的序号（通过xxx.dataset 拿到）
    // console.log(e.target.dataset.id)
    const Aid = +e.target.dataset.id  //得到的是字符串。 需要进行转换
    //3.2 拿到这个索引号。 我们就可以是实现标签中内容的更改
    //还是通过排他思想， 删除之前的大盒子， 然后加入新的盒子
    document.querySelector('.tab-content .active').classList.remove('active')
    // document.querySelector(`.tab-content .item:nth-child(${Aid + 1})`).classList.add('active')    
    //上述的简写. 直接获取所有的item，然后通过数组定位
    items[Aid].classList.add('active')

  }
})  