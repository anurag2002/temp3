function uservalidate1() {
    let name1 = document.getElementById("userName").value;
    var rel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (rel.test(name1)) {
        document.getElementById("userName").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("userName").style.borderColor = "red";
        return false;
    }
}

function passvalidate1() {
    let name1 = document.getElementById("pass").value;
    var rel = /^[0-9a-zA-Z]{8,15}$/;
    if (rel.test(name1)) {
        document.getElementById("pass").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("pass").style.borderColor = "red";
        return false;
    }
}

function check() {
    userNameBorder = document.getElementById("userName").style.borderColor;
    passBorder = document.getElementById("pass").style.borderColor;

    if (userNameBorder != "green" || passBorder != "green") {
        document.getElementById("loginPage").reset();
        document.getElementById("userName").style.borderColor = "red";
        document.getElementById("pass").style.borderColor = "red";
    }
}