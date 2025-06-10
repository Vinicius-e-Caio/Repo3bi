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
  form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  onSubmitLogin() {
    if (this.form.valid) {
      console.log('Formulário de Login:', this.form.value);
      const email = this.form.get('email')?.value;
      const senha = this.form.get('password')?.value;

      if (this.emailexistente.includes(email) && this.senhaexistente.includes(senha)) {
        
        alert('Login realizado com sucesso!');
        this.form.reset();

      } else {
        alert('Email ou senha inválidos. Tente novamente.');
      }
    }
  }
}
