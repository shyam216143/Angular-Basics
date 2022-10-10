import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class RepeatPasswordMatcher implements ErrorStateMatcher {
	isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean|any {

    	return	(control && control.parent?.get('password')?.value !== control.parent?.get('passordRepeat')?.value && control.dirty);
	}
}
