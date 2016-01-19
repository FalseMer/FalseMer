
function login(){
  $.getJSON("http://falsemer.github.io/FalseMerData/login.json",function(data){
    var loginOk = false;
    for (var i = 0; i < data.length; i++) {
      if(data[i].enterCode==$("#enterCode").val()){
        loginOk=true;
        $.cookie("loginOk",true);
        location.href="index.html";
        return;
      }
    }


    alert("Enter Error...");

  });
}
