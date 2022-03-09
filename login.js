const loginForm = document.getElementById("login_form");
const loginButton = document.getElementById("login_form_submit");
const loginErrorMsg = document.getElementById("login_error_msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var usercode = loginForm.usercode.value;
    var password = loginForm.password.value;

    if(usercode=="usercode1" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    else if (usercode=="usercode2" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    else if (usercode=="usercode3" && password=="Abc@123"){
        window.location.href="welcome.html"
    }
    
    else {
        alert("Invalid Username or Password")
    }
})
