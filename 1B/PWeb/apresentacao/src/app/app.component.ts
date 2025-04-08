import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { CaioComponent } from './caio/caio.component';
import { ViniComponent } from "./vini/vini.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TesteComponent, CaioComponent, ViniComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apresentacao';
}
