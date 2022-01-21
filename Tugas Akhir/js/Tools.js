function SetAlert(el,typeAlert,messageAlert){
    let _errmsg = "<div class='alert alert-"+typeAlert+"' role='alert'>"+messageAlert+"</div>";
    $("#"+el).html(_errmsg);

    setTimeout(function(){
        $("#"+el).html("");
      } ,5000);
}

function CheckLoginSession(from){
    let _currentUserJsonString = localStorage.getItem('CurrentUser');
    
    if(from == "login"){
        if(_currentUserJsonString !== null){
            let _currentUser = JSON.parse(_currentUserJsonString);
            
            if(_currentUser.username == "admin" && _currentUser.password == "admin"){
                setTimeout(function(){
                    window.location.href = "index.html"
                } ,1000);
            }else{
                setTimeout(function(){
                    window.location.href = "home.html"
                } ,1000);
            }
            
        }
    }else{
        if(_currentUserJsonString == null){
            setTimeout(function(){
            window.location.href = "login.html"
            } ,1000);
        }
    }
    
}
