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
  phrases: string[] = [
    "Seja forte e corajoso! — Josué 1:9",
    "O amor é paciente, o amor é bondoso. — 1 Coríntios 13:4",
    "Em tudo dai graças. — 1 Tessalonicenses 5:18",
    "Não andeis ansiosos por coisa alguma. — Filipenses 4:6",
    "Tudo coopera para o bem daqueles que amam a Deus. — Romanos 8:28",
    "Busque a sabedoria e ela te exaltará. — Provérbios 4:8",
    "Se Deus é por nós, quem será contra nós? — Romanos 8:31",
    "A verdade vos libertará. — João 8:32",
    "Tudo tem o seu tempo. — Eclesiastes 3:1",
    "Sejam imitadores de Deus — Efésios 5:1-2",
  ]
  // newPhrase() {
  //   this.frase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  // }

  title = 'pw3-biscoito';
  isActive: boolean = false;
  open: boolean = false;
  phraseSelected: string = "";
  get biscoito(): string {
    return this.open ? "/biscoito-aberto.png" : "/biscoito.png";
  }
  abrirBiscoito(ativo: boolean) {
    this.isActive = ativo;
    this.open = ativo;
    this.phraseSelected = this.phrases[Math.floor(Math.random() * this.phrases.length)];
  }
}
