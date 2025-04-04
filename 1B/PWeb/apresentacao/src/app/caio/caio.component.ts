import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-caio',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './caio.component.html',
  styleUrl: './caio.component.css'
})
export class CaioComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
