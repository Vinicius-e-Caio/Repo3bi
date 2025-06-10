import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form!: FormGroup;
  @Input() Cadastro!:boolean;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senhas: this.fb.group({
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmarSenha: ['', [Validators.required, Validators.minLength(6)]]
        }, {validators: this.mesmaSenhaValidator}),
      })
      
  }

  onSubmitCadastro() {
    if (this.form.valid) {
      const name = this.form.get('nome')?.value;
      const sobrenome = this.form.get('sobrenome')?.value;
      const email = this.form.get('email')?.value;
      const senha = this.form.get('senha')?.value;


    }
  }

  mesmaSenhaValidator: ValidatorFn = (FormGroup: AbstractControl): ValidationErrors | null => {
    let senha = FormGroup.get('senha')?.value;
    let confirmarSenha = FormGroup.get('confirmarSenha')?.value;

    if (senha != confirmarSenha) {
      return { mesmaSenha: true };
    }
    return null;
  }
}
