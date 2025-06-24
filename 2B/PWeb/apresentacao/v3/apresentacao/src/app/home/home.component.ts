import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { LoginComponent } from "../login/login.component";
import { CadastroComponent } from "../cadastro/cadastro.component";
import { CardsFeaturesComponent } from "../cards-features/cards-features.component";
import { FeaturesComponent } from "../features/features.component";

@Component({
  selector: 'app-home',
  imports: [CadastroComponent, CardsFeaturesComponent, FeaturesComponent],
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
