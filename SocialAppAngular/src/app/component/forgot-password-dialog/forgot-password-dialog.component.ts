import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
  styleUrls: ['./forgot-password-dialog.component.css']
})
export class ForgotPasswordDialogComponent implements OnInit {
	forgotPasswordFormGroup!: FormGroup;
 
  fetchingResult: boolean = false;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

	get email() { return this.forgotPasswordFormGroup.get('email'); }
  ngOnInit(): void {
    this.forgotPasswordFormGroup = this.formBuilder.group({
			email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(64)])
		});
  }
  sendForgotPasswordEmail(): void {}
}
