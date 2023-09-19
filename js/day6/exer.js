let money = 0
while(true){
  let select = +prompt(`请输入您的操作
   1. 存钱 
   2. 取钱
   3. 查看余额
   4. 退出` )
  let num 
  if(select === 1){
    num = +prompt("请输入取钱数: ")
    if(money - num <0 ){
      alert("余额不足， 取款失败！")
    }else{
      money -= num
    }
  }
  else if(select === 2){
    num = +prompt("请输入存钱数: ")
    money+= num
    alert(`存款成功！您的余额是${money}`)
  }
  else if(select === 3){
    alert(`您的余额是${money}`)
  }else{
    break
  }
}

