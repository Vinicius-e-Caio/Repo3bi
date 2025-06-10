import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, FooterComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoginFormVisible: boolean = false;

  
  changeDisplay(display: boolean) {
    this.isLoginFormVisible = display;
  }
}
