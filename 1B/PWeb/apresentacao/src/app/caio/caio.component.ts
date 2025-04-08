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
  longText = `[...] foi no final do nono ano que, "por acaso", descobri a programação e conheci a ETEC. A partir daí, comecei minha jornada no mundo do desenvolvimento de sistemas.`;
} 
