$(function(){
  var isLoginOk = $.cookie("loginOk");
  if(!isLoginOk){
      location.href="login.html"
  }
})
