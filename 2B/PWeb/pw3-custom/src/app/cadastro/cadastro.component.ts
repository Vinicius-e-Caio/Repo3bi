import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
     username: ['', Validators.required],
     passwords : this.fb.group({
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required]
     },
     {validators: this.checkkey}
    )
    });
  }

  submit() {
    if (this.form.valid) {
      alert("Formulário válido");
    } else {
      alert("Formulário inválido");
    }
  }

  checkkey: ValidatorFn = (FormGroup: AbstractControl): ValidationErrors | null => {
    let senha = FormGroup.get('password')?.value;
    let confirmarSenha = FormGroup.get('confirmPassword')?.value;

    if (senha !== confirmarSenha) {
      return {senhasDiferentes: true}
    }
    return null;
  }
}
