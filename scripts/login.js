import axios from "axios";
import { login } from "../apis/auth.service";
import { setSessionToken } from "../libs/session-manager";
import { errorHandler } from "../libs/error-handler";




const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit',(event)=>{
    event.preventDefault();
const userNameInput=event.target.children[0];
const passwordInput=event.target.children[1];
console.log("username" , userNameInput.value);
console.log("password", passwordInput.value);
try {
     const response =  login ({
        username : userNameInput.value,
        password : passwordInput.value,
    
    });
     console.log(response);
     setSessionToken(response.token);
     window.location.href="/Home";
} catch (error) {
    errorHandler(error)
}

toast("");
});

