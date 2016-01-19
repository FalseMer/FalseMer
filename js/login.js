
function login(){
  $.getJSON("http://falsemer.github.io/FalseMerData/login.json",function(data){
    var loginOk = false;
    for (var i = 0; i < data.length; i++) {
      if(data[i].name==$("#inputAccount").val()&&data[i].password==$("#inputPassword").val()){
        loginOk=true;
        location.href="index.html";
        return;
      }
    }
    console.log(loginOk);
    bootbox.alert("用户名密码错误！", function() {
    });

  });
}
