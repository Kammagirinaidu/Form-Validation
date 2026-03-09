const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", function(e){
    e.preventDefault();

    validateForm();
});

function validateForm(){

    let nameValue = name.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();

    let error = document.querySelectorAll(".error");

    error.forEach(e => e.innerText = "");

    if(nameValue === ""){
        error[0].innerText = "Name is required";
    }

    if(emailValue === ""){
        error[1].innerText = "Email is required";
    } 
    else if(!validateEmail(emailValue)){
        error[1].innerText = "Enter valid email";
    }

    if(passwordValue === ""){
        error[2].innerText = "Password is required";
    } 
    else if(passwordValue.length < 6){
        error[2].innerText = "Password must be at least 6 characters";
    }

}

function validateEmail(email){
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return email.match(pattern);
}
