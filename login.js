function login(){
    let user=
    document.getElementById("username").value;
    let pass=
    document.getElementById("password").value;
    let namePattern =/^[A-Za-z]+$/;
    let passPattern =/^[0-9]{6}$/;
    if(!namePattern.test(user)){
        alert("Username must contain only alphabets");
        return false;
    }
    if(!passPattern.test(pass)){
        alert("Password must be exactly 6 digits");
        return false;
    }

    alert("Login Successful..!!");
    window.location.href="index.html";
    return false;
}

/*function onlyAlphabets(e){
    let char=e.key;
    if(/^[a-zA-Z]$/.test(char))
    {
        return true;
    }

    if(char==="Backspace"||char==="Tab"){
        return true;
    }
    return false;
}*/

function onlyAlphabets(input){
    input.value = input.value.replace(/[^A-Za-z]/g,'');
}