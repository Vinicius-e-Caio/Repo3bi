import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImagemComponent } from "./imagem/imagem.component";
import { FrasesComponent } from "./frases/frases.component";
import { BotaoComponent } from "./botao/botao.component";

@Component({
  selector: 'app-root',
  imports: [ ImagemComponent, FrasesComponent, BotaoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-biscoito';
  isActive: boolean = false;
  open: boolean = false;
  get biscoito(): string {
    return this.open ? "/biscoito-aberto.png" : "/biscoito.png";
  }
  abrirBiscoito(ativo: boolean) {
    this.isActive = ativo;
    this.open = !this.open;
  }
}
