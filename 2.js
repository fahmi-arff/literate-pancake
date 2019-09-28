function is_username_valid(str){
  reg = /^[a-z]{6}$/
  return reg.test(str)
}
is_username_valid('arkade')

function is_password_valid(str){
  reg = /^(?=.*7)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[0-9a-zA-Z@$!%*?&]{5,10}$/g
  return reg.test(str)
}
is_password_valid('7Ark@demi')