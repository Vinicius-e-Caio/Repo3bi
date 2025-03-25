import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() ativo: boolean = false;
  @Input() frase:string = "";

  // @Output() messageEvent = new EventEmitter<string>();
  // newPhrase() {
  //   this.frase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  // }

}
