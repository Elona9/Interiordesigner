

function validatingUserName(){
var nameRegex=/^[a-zA-Z\-]+$/;
var validateUserName=document.getElementById("username").value;
var nameLength=validateUserName.length;
var validatedUserName= validateUserName.match(nameRegex);
console.log(validateUserName + " " + nameLength + " "+validatedUserName);

if(validateUserName !=null && nameLength<6){
    document.getElementById("showWhenError").style.display='';
}else{
    document.getElementById("showWhenError").style.display='none';
}
}


function validatePassword(){
    var passwRegex=  /^[A-Za-z]\w{7,14}$/;
    var validatePassword=document.getElementById("password").value;
    var passLength=validatePassword.length;

    var passwordValidated=validatePassword.match(passwRegex);
    console
    if(passLength<5){
        document.getElementById('showWhenPas').style.display='';

    }
    else{
        document.getElementById('showWhenPas').style.display='none';
    }


}


function removeError(){
    var name=document.getElementById("username").value;
    var namelength=name.length;

    if(namelength<5){
        document.getElementById("showWhenError").style.display='';
    }else{
        document.getElementById("showWhenError").style.display='none';
    }
}

function removeErrorPassowrd(){
    var password=document.getElementById("password").value;
    var passwordlength=password.length;

    if(passwordlength<5){
    document.getElementById("showWhenPas").style.display='';
    }else{
        document.getElementById("showWhenPas").style.display='none';
    }
}