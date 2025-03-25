import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-botao',
  imports: [ FrasesComponent ],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Output() messageEvent = new EventEmitter<boolean>();
  abrirBiscoito() {
    this.messageEvent.emit(true);
  }
  fecharBiscoito() {
    this.messageEvent.emit(false);
  }
}
