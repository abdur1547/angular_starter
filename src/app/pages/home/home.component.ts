import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  count = signal(0);

  clickHandler() {
    this.count.update(value => value+1)
  }
}
