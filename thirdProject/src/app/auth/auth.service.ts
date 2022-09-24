import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth,signOut, signInWithEmailAndPassword } from "firebase/auth";
import { login, register } from './auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: boolean = false;
  isLoading: Boolean = false;
  isPasswordMatched: Boolean = true;
  constructor(private router:Router) { }
  login(form: login) {
    const auth = getAuth();
    this.isLoading = true;


    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated=true;
        this.router.navigate(['']);

        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated=false;
        alert("sorry for an exception is catched")
      }).finally(() => (this.isLoading = false))
  }
  register(form: register) {
    this.isLoading = true;

    if (form.password != form.confirm_password) {
      this.isPasswordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in 
        this.isAuthenticated = true
        console.log(userCredential)
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false
        // ..
      }).finally(() => {
        this.isLoading = false;
      })
  }
  logout(){
    

const auth = getAuth();
signOut(auth).then(() => {
  this.router.navigate(['login'])
  this.isAuthenticated=false;
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  }
}
