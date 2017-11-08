import {Component, HostListener, OnInit} from '@angular/core';
import {KEY_CODE} from "../../app.component";

@Component ({
    selector:'about',
    templateUrl : './about.component.html'
})

export class AboutComponent implements OnInit{

  isBack: boolean;
  isNext: boolean;
  content: string;


  constructor(){
  }

  ngOnInit(){
    this.content = "About";
  }

  next(){
    this.isNext=true;
    this.isBack=false;
    this.content = "Next";
  }

  back(){
    this.isNext=false;
    this.isBack=true;
    this.content = "Back";
  }

  @HostListener('window:keydown', ['$event'])
  keyPressEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.next();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.back();
    }
  }
}
