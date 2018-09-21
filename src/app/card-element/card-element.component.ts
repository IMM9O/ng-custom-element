import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CardElementComponent {
  @Input()
  title = 'Angular App';

}
