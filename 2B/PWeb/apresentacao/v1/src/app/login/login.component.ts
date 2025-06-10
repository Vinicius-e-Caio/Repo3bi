import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailexistente = ['email@email.com']
  senhaexistente = ['senha12345']
  @Input() Login!:boolean;
  FormLogin!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.FormLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  onSubmitLogin() {
    if (this.FormLogin.valid) {
      const email = this.FormLogin.get('email')?.value;
      const senha = this.FormLogin.get('senha')?.value;

      if (this.emailexistente.includes(email) && this.senhaexistente.includes(senha)) {
        
      } else {
        
      }
    }
  }
  // addItem(newItem: boolean) {
  //   this.isLoginFormVisible.push(newItem);
  // }
  // loginForms: FormGroup = new FormGroup({});
  // constructor(private fb: FormGroup) {
  //   this.loginForms = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl('')
  //   });
  // }
  // initializeForm() {
  //   const formValues = this.loginForms.value;
  //   const email = formValues.get('email')?.value;
  //   const password = formValues.get('password')?.value;
  //   console.log('Email:', email);
  // }
}
