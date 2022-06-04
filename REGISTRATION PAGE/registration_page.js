function fnamevalidate() {
    let name1 = document.getElementById("fName").value;
    var rel = /^[a-zA-Z\s]{3,50}$/;
    if (rel.test(name1)) {
        document.getElementById("fName").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("fName").style.borderColor = "red";
        return false;
    }
}

function emailvalidate() {
    let name1 = document.getElementById("emailID").value;
    var rel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (rel.test(name1)) {
        document.getElementById("emailID").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("emailID").style.borderColor = "red";
        return false;
    }
}

function passvalidate() {
    let name1 = document.getElementById("pass").value;
    var rel = /^[0-9a-zA-Z]{8,16}$/;
    if (rel.test(name1)) {
        document.getElementById("pass").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("pass").style.borderColor = "red";
        return false;
    }
}


function check1() {
    nameBorder = document.getElementById("fName").style.borderColor;
    mailBorder = document.getElementById("emailID").style.borderColor;
    passBorder = document.getElementById("pass").style.borderColor;

    if (nameBorder != "green" || mailBorder != "green" || passBorder != "green") {
        document.getElementById("registrationForm").reset();
        document.getElementById("fName").style.borderColor = "red";
        document.getElementById("emailID").style.borderColor = "red";
        document.getElementById("pass").style.borderColor = "red";

    }
}