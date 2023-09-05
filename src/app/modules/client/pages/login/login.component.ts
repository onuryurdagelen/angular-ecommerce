import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
//TODO Login component'i doldur.Kullanıcı giriş işlemlerini gerçekleştir.(Jwt vs.)
loginForm: FormGroup;
returnUrl:string;

constructor(
  private fb: FormBuilder,
  private activeRoute: ActivatedRoute,
  private accountService:AccountService,
  private router:Router) {

    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/';
  this.loginForm = this.fb.group({
    // Define your form controls here
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
}
onSubmit(){
  if(this.loginForm.valid){
    this.accountService.login(this.loginForm.value).subscribe({
      next:user =>this.router.navigateByUrl(this.returnUrl),
      error:error => console.log(error),
      complete:() => console.log("login completed!")
    });
  }
  console.log(this.loginForm.value);
}
}
