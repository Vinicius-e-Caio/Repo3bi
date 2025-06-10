import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, LoginComponent, CadastroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoginFormVisible: boolean = false;
  isCadastroFormVisible: boolean = false;

  
  changeDisplay(display: boolean) {
    this.isLoginFormVisible = display;
  }

  changeDisplayCadastro(displayCadastro: boolean) {
    this.isCadastroFormVisible = displayCadastro;
  }
}
