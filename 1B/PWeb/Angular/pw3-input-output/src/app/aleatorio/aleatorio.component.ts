import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aleatorio',
  imports: [],
  templateUrl: './aleatorio.component.html',
  styleUrl: './aleatorio.component.css'
})
export class AleatorioComponent {
    @Input() min: number = 0
    @Input() max: number = 0
    @Output() resultado = new EventEmitter();

    gerar(){
      var valor = Math.floor(Math.random() * (this.max - this.min + 1))
      this.resultado.emit(valor)
    }
}
