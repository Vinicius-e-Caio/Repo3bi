import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-features',
  imports: [ReactiveFormsModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  dados: any[] = [];
  form!: FormGroup;
  editIndex: number | null = null;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      idade: ['', [Validators.required, Validators.min(1)]]
  });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const valor = this.form.value;

    if (this.editIndex !== null) {
      this.dados[this.editIndex] = valor;
      this.editIndex = null;
    } else{
      this.dados.push(valor);
    }
    this.form.reset();
  }
  editar(index: number){
    this.editIndex = index;
    const item = this.dados[index];
    this.form.setValue({ ...this.dados[index] });
  }

  excluir(index: number) {
    this.dados.splice(index, 1);
    if (this.editIndex === index){
      this.form.reset();
      this.editIndex = null;
    }
  }
}
