var labelUsername = document.querySelector('.labelUsername');
var labelPassword = document.querySelector('.labelPassword');
var username = document.querySelector('.username');
var password = document.querySelector('.password');
var submit = document.querySelector('.submit');

username.addEventListener("input", function(){
    if(username.value){
        labelUsername.classList.add("animation");
    }else
    {
        labelUsername.classList.remove("animation");
    }
});

password.addEventListener("input", function(){
    if(password.value){
        labelPassword.classList.add("animation");
    }else
    {
        labelPassword.classList.remove("animation");
    }
});



