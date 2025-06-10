import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgpaperComponent } from "./ngpaper/ngpaper.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgpaperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pw3-postit';
}
