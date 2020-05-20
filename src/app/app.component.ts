import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front End Web 10 Angular Application';

  doIt() {
    this.title = this.title.toUpperCase();
  }
}
