import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Output() display = new EventEmitter<boolean>();
  // @Output() displayCadastro = new EventEmitter<boolean>();
  // changeDisplay() {
  //   this.display.emit(true);
  //   this.displayCadastro.emit(false);
  // }
  // changeDisplayCadastro() {
  //   this.displayCadastro.emit(true);
  //   this.display.emit(false);
  // }
}
