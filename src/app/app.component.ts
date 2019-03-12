import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  show = true;
  title = 'Hells Kitchen';
  img = 'https://i.forbesimg.com/media/2015/06/26/0626_celeb100-gordon-ramsay-1_1200x675.jpg';
  subtitle = 'Test hello world';

  toggle() {
    this.show = !this.show;
  }
}