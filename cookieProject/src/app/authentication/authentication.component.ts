import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  state = AuthenticatorCompState.LOGIN;
  // firebasetsAuth: FirebaseTSAuth;
  constructor(private bottomSheetRef: MatBottomSheetRef) { 
    // this.firebasetsAuth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
  }

  onResetClick(resetEmail: any){
    let email = resetEmail.value;
    // if(this.isNotEmpty(email)) {
    //   this.firebasetsAuth.sendPasswordResetEmail(
    //     {
    //       email: email,
    //       onComplete: (err:any) => {
    //         this.bottomSheetRef.dismiss();
    //       }
    //     }
    //   );
    // }
  }


  onLogin(
    loginEmail: any,
    loginPassword: any
  ){
    let email = loginEmail.value;
    let password = loginPassword.value;

    // if(this.isNotEmpty(email) && this.isNotEmpty(password)) {
    //   this.firebasetsAuth.signInWith(
    //     {
    //       email: email,
    //       password: password,
    //       onComplete: (uc:any) => {
    //         this.bottomSheetRef.dismiss();
    //       },
    //       onFail: (err: any) => {
    //         alert(err);
    //       }
    //     }
    //   );
    // }

  }

  onRegisterClick(
    registerEmail: any,
    registerPassword: any,
    registerConfirmPassword: any
  ){
    let email = registerEmail.value;
    let password = registerPassword.value;
    let confirmPassword = registerConfirmPassword.value;

    if(
      this.isNotEmpty(email) &&
      this.isNotEmpty(password) && 
      this.isNotEmpty(confirmPassword) &&
      this.isAMatch(password, confirmPassword)
    ){
      // this.firebasetsAuth.createAccountWith(
      //   {
      //     email: email,
      //     password: password,
      //     onComplete: (uc:any) => {
      //       this.bottomSheetRef.dismiss();
      //     },
      //     onFail: (err: any) => {
      //       alert("Failed to create the account.");
      //     }
      //   }
      // );
    }

  }

  isNotEmpty(text: string){
    return text != null && text.length > 0;
  }

  isAMatch(text: string, comparedWith: string){
    return text == comparedWith;
  }

  onForgotPasswordClick(){
    this.state = AuthenticatorCompState.FORGOT_PASSWORD;
  }

  onCreateAccountClick(){
    this.state = AuthenticatorCompState.REGISTER;
  }

  onLoginClick(){
    this.state = AuthenticatorCompState.LOGIN;
  }

  isLoginState(){
    return this.state == AuthenticatorCompState.LOGIN;
  }

  isRegisterState(){
    return this.state == AuthenticatorCompState.REGISTER;
  }

  isForgotPasswordState(){
    return this.state == AuthenticatorCompState.FORGOT_PASSWORD;
  }

  getStateText(){
    switch(this.state){
      case AuthenticatorCompState.LOGIN:
        return "Login";
      case AuthenticatorCompState.REGISTER:
        return "Register";
      case AuthenticatorCompState.FORGOT_PASSWORD:
        return "Forgot Password";
    }
  }

}

export enum AuthenticatorCompState {
  LOGIN,
  REGISTER,
  FORGOT_PASSWORD
}

