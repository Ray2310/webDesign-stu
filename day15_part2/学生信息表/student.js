/**
 * 实现新增学员 和 删除学员的操作
 * 
 */



/**
 * 新增学员
 * 1. 声明一个空数组，
 * 2. 点击录入就会将输入框中的内容追加数组中去
 * 3. 再根据数组中的内容渲染页面表格中的内容
 * 4. 点击删除按钮， 删除对应数组里面的数据
 * 4. 再次根据数组中的渲染页面
 */


//一、 录入模块
// 首先取消表单默认提交事件
// 获取元素 创建新的对象 ，里面存储表单中获取过来的内容
const uname = document.querySelector('.uname')
const age = document.querySelector('.age')
const gender = document.querySelector('.gender')
const salary = document.querySelector('.salary')
const city = document.querySelector('.city')
const tbody = document.querySelector('tbody')

//声明空数组
const arr = [] 


//获取所有带有name属性的元素
const items = document.querySelectorAll('[name]') 
// 1. 表单提交事件
const info = document.querySelector('.info')
info.addEventListener('submit',function(e){
  //阻止默认跳转行为
  e.preventDefault()
  
  // 这里进行表单验证  如果不通过，直接中断，不需要添加数据
  // 先遍历循环
  for (let i = 0; i < items.length; i++) {
    if (items[i].value === '') {
      return alert('输入内容不能为空')
    }
  }
  
  //创建对象 ， 将用户输入的值获取过来然后
  const obj = {
    stuId: arr.length + 1, //相当于primekey的自增
    uname: uname.value,
    age: age.value,
    gender: gender.value,
    salary: salary.value,
    city: city.value
  }
  console.log(obj)
  //追加到数组中去
  arr.push(obj)
  //清空输入框的数据
  info.reset() //重置表单内容
  //渲染内容
  render()

})

// 2. 渲染函数 因为增加和删除都需要渲染
function render(){
  //先清空tbody 以前的行，然后把新的数据渲染进行
  tbody.innerHTML = ''

  //遍历数组
  for(let i =0 ;i< arr.length; i++){
    //生成tr
    const tr = document.createElement('tr')
    tr.innerHTML = `
         <td>${arr[i].stuId}</td>
          <td>${arr[i].uname}</td>
          <td>${arr[i].age}</td>
          <td>${arr[i].gender}</td>
          <td>${arr[i].salary}</td>
          <td>${arr[i].city}</td>
          <td>
            <a href="javascript:" data-id=${i}>删除</a>
          </td>
    `
    //追加元素
    tbody.appendChild(tr) // 这样会出现bug ，连续追加两条数据 。所以需要先清空， 然后再添加
  }

}

//二、 删除模块

tbody.addEventListener('click', function(e){
  // 通过自定义属性获取删除的按钮位置data-id 
  if(e.target.tagName === 'A'){
    // console.log(e.target.dataset.id)
    //删除arr数组对应的数据
    arr.splice(e.target.dataset.id, 1)
    //重新加载数组内容进行渲染
    render()
  }

  
})



















//二、



