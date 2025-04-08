import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';


@Component({
  selector: 'app-vini',
  imports: [MatCardModule, MatButtonModule, MatChipsModule, MatProgressBarModule],
  templateUrl: './vini.component.html',
  styleUrl: './vini.component.css'
})
export class ViniComponent {
  longText = `Vinicius conquistou Angular Básico. Comemore com ele.`;
}
