var nameError = document.getElementById('name-error');
var surnameError = document.getElementById('surname-error');
var emailError=document.getElementById('email-error');
var passwordError=document.getElementById('password-error');

function validateName(){
    var name=document.getElementById('first-name').value;

    if(name.length==0){
        nameError.innerHTML='First Name cannot be empty';
        return false;
    }
    }

    function validateSurname(){
        var surname=document.getElementById('last-name').value;

        if (surname.length==0){
            surnameError.innerHTML='Last Name cannot be empty';
            return false;
        }
    }
    

function validateEmail(){
    var email=document.getElementById('email').value;

    if(email.length==0){
        emailError.innerHTML='Looks like this is not an email';
        return false;
    }
} 

function validatePassword(){
    var password=document.getElementById('password').value;

    if(password.length==0){
        passwordError.innerHTML='Password cannot be empty';
        return false;
    }
}
