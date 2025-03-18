import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrl: './frases.component.css'
})
export class FrasesComponent {
  @Input() phrases: string[] = [
    // "Seja forte e corajoso! — Josué 1:9",
    // "O amor é paciente, o amor é bondoso. — 1 Coríntios 13:4",
    // "Em tudo dai graças. — 1 Tessalonicenses 5:18",
    // "Não andeis ansiosos por coisa alguma. — Filipenses 4:6",
    // "Tudo coopera para o bem daqueles que amam a Deus. — Romanos 8:28",
    // "Busque a sabedoria e ela te exaltará. — Provérbios 4:8",
    // "Se Deus é por nós, quem será contra nós? — Romanos 8:31",
    // "A verdade vos libertará. — João 8:32",
    // "Tudo tem o seu tempo. — Eclesiastes 3:1",
    "Sejam imitadores de Deus — Efésios 5:1-2",
  ]
  @Input() newPhrase:string = 'a'
  inserir = this.phrases.push(this.newPhrase)
  frase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
}
