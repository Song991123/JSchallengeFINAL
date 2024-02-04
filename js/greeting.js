/** crateDate : 2024-01-27
 *  목적 : 로컬 스토리지를 사용한 로그인 js **/

const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const greeting      = document.querySelector("#greeting");
const clockHidden   = document.querySelector("#clock");
const savedUsername = localStorage.getItem("username");

// --------------- Strings ---------------
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY     = "username";

// --------------- Check ---------------
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", OnLoginsubmit);
}
else{
    // show the greetings
    paintGreetings();
}

// --------------- Functoins ---------------
function OnLoginsubmit(event){
    event.preventDefault(); //기본적인 event 발생을 방지
    const usernameWrote = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, usernameWrote);
    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${username}'s ToDo List`;
    visible.classList.remove(HIDDEN_CLASSNAME);
}