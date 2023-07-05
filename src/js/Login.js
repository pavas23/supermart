var x = document.getElementById("login4");
var y = document.getElementById("register4");
var z = document.getElementById("btn4");
var pass_t = document.getElementById("pass4");
var pass_t1 = document.getElementById("pass5");
function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}

function toggle() {
    if (pass_t.type === "password") {
        pass_t.type = "text";
    }
    else {
        pass_t.type = "password";
    }
}

function toggle1() {
    if (pass_t1.type === "password") {
        pass_t1.type = "text";
    }
    else {
        pass_t1.type = "password";
    }
}