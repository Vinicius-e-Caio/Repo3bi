import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  biscoito = "/biscoito.png"

  change() {
    if (this.biscoito == "/biscoito.png") {
      this.biscoito = "/biscoito-aberto.png"
    } else {
      this.biscoito = "/biscoito.png"
    }
  }
}
