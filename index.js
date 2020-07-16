function validation(){
    var user = document.getElementById("user").value;
    var phone = document.getElementById("phone").value;

    var user_error = document.getElementById("user_error");
    var phone_error = document.getElementById("phone_error");


    var user_pattern = (/[a-z]+[0-9]+/);
    var phone_pattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;


    if(user.match(user_pattern)){
        user_error.innerHTML = "Valid";
        user_error.style.color="#00ff00";
    }
    else if(user == ''){
        user_error.innerHTML = "Fields cannot be empty";
        user_error.style.color="red";
    }
    else{
        user_error.innerHTML = "username error!";
        user_error.style.color="red";
    }


    if(phone.match(phone_pattern)){
        phone_error.innerHTML = "valid";
        phone_error.style.color="#00ff00";
    }
    else if(phone == ''){
        phone_error.innerHTML = "Fields cannot be empty";
        phone_error.style.color="";
    }
    else{
        phone_error.innerHTML = "Phone error!";
        phone_error.style.color="red";
    }

}