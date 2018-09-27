import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CardElementComponent {
  @Input()
  title = 'Angular App';

  @Input()
  name = 'Donna Marshall';

  @Input()
  time = new Date();


  @Input()
  caption = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, iste.`;

  @Input()
  profileImage = 'https://uinames.com/api/photos/female/15.jpg';

  @Input()
  postImage = 'https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?w=940&h=650&auto=compress&cs=tinysrgb';

}
