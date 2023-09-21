
const myAlert = document.querySelector('.alert')
//1. 给登录按钮绑定点击事件
document.querySelector('.btn-login').addEventListener('click', () => {

  //使用插件收集表单中的用户名密码
  const form = document.querySelector('.login-form')
  const data = serialize(form, {hash: true, empty: true})

  console.log("获取的data是: ", data)

  //获取用户名密码
  const username = document.querySelector('.username').value
  const password = document.querySelector('.password').value
  // console.log(username, password)

  //判断长度
  if(username.length < 8){
    console.log("用户名必须>= 8位")
    alertFun('用户名必须大于等于6位',false)
    return 
  }
  if (password.length < 6) {
    console.log('密码必须大于等于6位')
    alertFun('密码必须大于等于6位',false)
    return // 阻止代码继续执行
  }
  //基于axios提交登录信息
  axios({
    url: 'http://hmajax.itheima.net/api/login',
    method: 'POST',
    data:{
      username: username, //黑马的服务器登录信息：itheima007
      password: password // 7654321
    }
  }).then(result => {
    //获取发送的信息
    console.log("获取发送的信息",result.data.message)
  }).catch(error =>{
    //获取异常信息
    console.log("获取异常信息",error.response.data.message)
    // alert("登录失败:",error.response.data.message)
    alertFun(error.response.data.message, false)
  }).finally(()=>{
    console.log("finally执行的内容")
  })





})


/**
 * 登录成功与失败的背景颜色
 * 过2秒之后提示框消失
 */
//登录失败的提示信息
function alertFun(message,isSuccess = true){

  //显示提示框
  myAlert.classList.add('show')
  //给提示框添加内容
  myAlert.innerHTML = message
  //设置背景
  if(isSuccess === true){
    myAlert.classList.add('alert-success')
  }else{
    myAlert.classList.add('alert-danger')
  }

  //过2s进行隐藏
  setTimeout(()=>{
    myAlert.classList.remove('show')
  },2000)
}