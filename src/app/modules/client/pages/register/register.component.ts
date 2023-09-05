import { Component } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounceTime, finalize, map, of, switchMap, take } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
//TODO Register component'i doldur.Kullanıcı kayıt işlemlerini gerçekleştir.(Jwt vs.)

errors:string[] = [];
registerForm: FormGroup;

complexPassword = "(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$"

constructor(private fb: FormBuilder,
  private accountService:AccountService,
  private router:Router
  ) {
  this.registerForm = this.fb.group({
    // Define your form controls here
    displayName: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.required, Validators.email]),
    [this.validateEmailNotTaken()]],
    password: ['', Validators.compose([Validators.required,Validators.pattern(this.complexPassword)])],
  });
}

validateEmailNotTaken():AsyncValidatorFn{
  return (control:AbstractControl) =>{
    return control.valueChanges.pipe(
      debounceTime(1000),
      take(1),
      switchMap(()=>{
        return this.accountService.checkEmailExists(control.value).pipe(
          catchError((err:any) => of(err.errors)),
          map((result:any) =>  result ? {emailExists:true} : null),
          finalize(() => control.markAsTouched())
    
        )
      })
    )
   
  }
}


onSubmit() {
  if (this.registerForm.valid) {
    this.accountService.register(this.registerForm.value).subscribe({
      next:() => this.router.navigateByUrl('/'),
      error:error => this.errors = error.errors
    })
  }
}
}