import axios from "axios";
import {  signup } from "../apis/auth.service";
import { errorHandler } from "../libs/error-handler";
import { setSessionToken } from "../libs/session-manager";



const signUpForm = document.getElementById('signup-form');
signUpForm.addEventListener('submit',(event)=>{
    event.preventDefault();
const userNameInput=event.target.children[0];
const passwordInput=event.target.children[1];
console.log("username" , userNameInput.value);
console.log("password", passwordInput.value);
try {
     const response=  signup({
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
