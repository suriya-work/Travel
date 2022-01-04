const formBtn = document.querySelector('.form-btn');
const username = document.querySelector('.username');
const userMsg = document.querySelector('.msg');
const passwordPssw = document.querySelector ('.pssw')
const password = document.querySelector('.password');
const cancel = document.querySelector('.cancelbtn');

formBtn.addEventListener("click", loginpass);

function loginpass(event) {
    event.preventDefault();
    const userValue = username.value 
    const passwordValue = password.value 
    let ifSendData = true;
    if(userValue.length ===0 || userValue.indexOf("@") === -1) {
        userMsg.innerHTML = "please enter a valid email"
        ifSendData = false;
    }

    if(passwordValue.length === 0 ) {
        passwordPssw.innerHTML = "please enter a valid password"
        ifSendData = false;
    } else if (passwordValue.length <= 4) {
        passwordPssw.innerHTML = "your password a short"
        ifSendData = false;

    }
   

} 