//对于练习中的相关习题
// 用户输入相关的价格等内容， 然后再显示到页面上
let name = prompt("商品名称")
let price = +prompt("商品价格")
let number = +prompt("商品数量")
let sum  //总价格
let address = prompt("收货地址")

sum = price * number 
//然后将上述的内容 打印到页面上
// 模板字符串 ,将html页面只需要输入的内容拿出来， 然后将需要改的通过${}写入
document.write(`
  <table>
    <tr>
      <th>商品名称</th>
      <th>商品价格</th>
      <th>商品数量</th>
      <th>总价</th>
      <th>地址</th>
    </tr>
    <tr>
      <th>${name}</th>
      <th>${price}</th>
      <th>${number}</th>
      <th>${sum}</th>
      <th>${address}</th>
    </tr>
  </table>

`)