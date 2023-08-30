import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//TODO Login component'i doldur.Kullanıcı giriş işlemlerini gerçekleştir.(Jwt vs.)
loginForm: FormGroup;

constructor(
  private fb: FormBuilder,
  private accountService:AccountService,
  private router:Router) {
  this.loginForm = this.fb.group({
    // Define your form controls here
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
onSubmit(){
  if(this.loginForm.valid){
    this.accountService.login(this.loginForm.value).subscribe({
      next:user => this.router.navigateByUrl('/'),
      error:error => console.log(error),
      complete:() => console.log("login completed!")
    });
  }
  console.log(this.loginForm.value);
}
}
