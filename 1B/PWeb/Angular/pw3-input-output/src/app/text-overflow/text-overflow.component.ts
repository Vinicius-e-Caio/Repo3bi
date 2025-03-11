import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo: string = "Input e Output"
  @Input() texto: string = "Texto que deverá ser apresentadado na página"
  @Input() clip:boolean = true
}
