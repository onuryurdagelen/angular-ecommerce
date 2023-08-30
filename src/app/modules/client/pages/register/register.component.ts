import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
//TODO Register component'i doldur.Kullanıcı kayıt işlemlerini gerçekleştir.(Jwt vs.)
registerForm: FormGroup;

constructor(private fb: FormBuilder) {
  this.registerForm = this.fb.group({
    // Define your form controls here
    displayName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.minLength(6)],
  });
}
onSubmit() {
  if (this.registerForm.valid) {
    const formData = this.registerForm.value;
    // Process or submit formData
  }
}
}