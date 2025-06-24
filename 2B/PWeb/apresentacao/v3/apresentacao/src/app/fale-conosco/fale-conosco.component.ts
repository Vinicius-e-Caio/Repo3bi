import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-fale-conosco',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fale-conosco.component.html',
  styleUrl: './fale-conosco.component.css'
})
export class FaleConoscoComponent {
    form!: FormGroup;

    constructor(private fb: FormBuilder) {
      this.form = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        mensagem: ['', [Validators.required, Validators.minLength(5)]]
      });
    }
    onSubmit() {
      if (this.form.invalid) {
        return;
      }
      alert('Mensagem enviada com sucesso!');
      this.form.reset();
    }
}
