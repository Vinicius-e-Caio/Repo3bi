import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgifComponent } from "./ngif/ngif.component";
import { NgswitchComponent } from "./ngswitch/ngswitch.component";
import { NgforComponent } from "./ngfor/ngfor.component";
import { TarefasComponent } from "./tarefas/tarefas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgifComponent, NgswitchComponent, NgforComponent, TarefasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-diretivas';
}
