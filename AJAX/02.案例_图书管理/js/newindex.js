//作用: 在post信息的时候 告诉服务器 上传着是谁
// 这是谁上传的内容。 后面想要获取对应的信息就可以根据这个‘外号’来获取信息
const creator = 'rayce'
/**
 * 渲染页面 函数
 * 
 */
function getBooksList(){
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    params: {
      //获取书的属性
      creator
    },
    method: 'GET'
  })
  .then( result => {
    console.log(result.data.data)
    const bookList = result.data.data
    //获取到数据之后对页面进行渲染
    const htmlStr = bookList.map((item, index) =>{
      return `<tr>
      <td>${index + 1}</td>
      <td>${item.bookname}</td>
      <td>${item.author}</td>
      <td>${item.publisher}</td>
      <td data-id=${item.id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
      </tr> 
      `
    }).join('')
    document.querySelector('.list').innerHTML = htmlStr
  })
}

//执行渲染页面
getBooksList()


/**
 * 实现新增图书的效果
 * 1. 点击新增弹窗 会出现bootstrap的弹窗提醒和显示效果
 * 2.  
 */
//首先创建弹窗对象
const addModalDom = document.querySelector('.add-modal')
const addModal = new bootstrap.Modal(addModalDom)
//点击保存按钮 会隐藏弹窗 (添加点击事件)
document.querySelector('.add-btn').addEventListener('click', () => {
  //通过bootstrap收集数据
  const addFrom = document.querySelector('.add-form') // 表单
  const bookObj = serialize(addFrom, {hash: true, empty: true})

  //通过axios提交到服务器
  axios({
    url: 'http://hmajax.itheima.net/api/books',
    method: 'POST',
    data: {
      ...bookObj,
      creator
    }
  }).then(result => {
    console.log("打印提交的数据")
    //重新渲染表单
    getBooksList()
    //清空添加页数据
    addFrom.reset()
    
  }).catch( error =>{
    console.log("出现异常:",error.message)
  }).finally((res) =>{
    //隐藏弹框  
    //最后一定要提交数据, 这里暂时不考虑有异常的情况出现
    addModal.hide()
  })

})

/**
 * 模块三: 删除图书
 * 通过点击事件绑定删除元素
 */
const del = document.querySelector('.list')
del.addEventListener('click', (e) => {

  //匹配删除的书是否为我们目前点击的要删除的
  if(e.target.classList.contains('del')){
    const theId = e.target.parentNode.dataset.id
    
    //调用axios中的删除接口 ,参数就是theId
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`,
      method: 'DELETE'
    }).then(res => {
        //需要进行刷新页面
        getBooksList()

    }).finally(res => {
       //删除元素中一定需要执行的内容
    })
  }
 })


 /**
  * 模块四: update图书
  * 首先我们需要在点击页面的时候将元素回显到页面 
  * 然后更新完之后还需要报错
  */
//编辑弹窗 -> 显示或者隐藏
 const editDom = document.querySelector('.edit-modal')
const editModal = new bootstrap.Modal(editDom)
//点击弹窗显示, 并且调用axios库回显内容

const edit = document.querySelector('.list')
edit.addEventListener('click', e => {
  //判断元素是否为我们点击的元素
  if(e.target.classList.contains('edit')){
    const theId = e.target.parentNode.dataset.id
    
    //调用axios库实现修改元素的回显
    axios({
      url: `http://hmajax.itheima.net/api/books/${theId}`
    }).then(res =>{
      console.log("需要修改的元素是:", res.data.data)
      const updateObj = res.data.data

      //遍历对象的属性实现回显 (重点)
      const keys = Object.keys(updateObj)
      keys.forEach(key =>{
        document.querySelector(`.edit-form .${key}`).value = updateObj[key]
      })
    })
    editModal.show()
  }
})

/**
 * 模块四 第二部分 实现点击修改保存
 * 
 */
//首先点击修改按钮, 触发事件 然后隐藏修改框, 最后实现数据保存以及数据刷新
const update = document.querySelector('.edit-btn')
update.addEventListener('click', e => {
  //提交保存 ,刷新数据
  const editForm = document.querySelector('.edit-form')
  const {id, bookname,author, publisher} = serialize(editForm, {hash: true, empty: true})
  //利用axios库实现数据的保存
  axios({
    url: `http://hmajax.itheima.net/api/books/${id}`,
    method: 'put',
    data: {
      bookname, author, publisher, creator
    }
  }).then(() => {
    //实现图书页面刷新
    getBooksList()
  }).catch( error =>{
    console.log("出现异常:",error.message)
  })
  .finally(()=>{
    //最后一定要实现弹窗的隐藏
    editModal.hide()
  })

})


