const loginform = document.querySelector("#id-form");
const loginInput = document.querySelector("#id-form  input");
const greetTing = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const getUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    
}

function notNullApllication(username) {
    greeTing.innerText=`안녕하세요. ${username}`;
}

if(getUsername === null) {
    Loginform.classList.remove(HIDDEN_CLASSNAME);
    Loginform.addEventListener("submit", onLoginSubmit);
}
else {
    notNullApllication(getUsername);
}


