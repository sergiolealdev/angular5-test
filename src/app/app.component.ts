import { Component, HostListener  } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  value = 0;
  isHidden = true;
  constructor() { }

  @HostListener('window:keydown', ['$event'])
  keyPressEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.isHidden = false;
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.isHidden = true;
    }
  }
}
