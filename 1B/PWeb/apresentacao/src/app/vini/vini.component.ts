import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-vini',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './vini.component.html',
  styleUrl: './vini.component.css'
})
export class ViniComponent {

}
