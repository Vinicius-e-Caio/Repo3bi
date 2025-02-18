import { Component } from '@angular/core';

@Component({
  selector: 'app-imagem',
  imports: [],
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  bixxcoite = "/biscoito.png"

  change() {
    if (this.bixxcoite == "/biscoito.png") {
      this.bixxcoite = "/biscoito-aberto.png"
    } else {
      this.bixxcoite = "/biscoito.png"
    }
  }
}
