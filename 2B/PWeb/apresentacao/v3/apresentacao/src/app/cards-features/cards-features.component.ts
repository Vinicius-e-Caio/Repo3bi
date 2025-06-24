import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-cards-features',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatButtonModule],
  templateUrl: './cards-features.component.html',
  styleUrl: './cards-features.component.css'
})
export class CardsFeaturesComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
