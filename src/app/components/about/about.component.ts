import {Component, HostListener, OnInit} from '@angular/core';
import {KEY_CODE} from "../../app.component";
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes
} from '@angular/animations';
@Component ({
    selector:'about',
    templateUrl : './about.component.html',
    animations: [
      trigger('testState', [
        state('true', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        })),
        state('false',   style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        transition('false => true', animate('100ms ease-in')),
        transition('true => false', animate('100ms ease-out'))
      ]),
      trigger('panelState1', [
        state('next', style({
          position: 'relative',
          left:'0%'
        })),
        state('back',   style({
          position: 'relative'
        })),
        transition('* => *', animate('1s 1s',keyframes([
          style({ left: '0%'}),
          style({ left: '-100%'}),
          style({ left: '100%'}),
          style({ left: '0%'}),
        ])))
      ])
    ]
})

export class AboutComponent implements OnInit{

  isBack: boolean;
  isNext: boolean;
  content: string;
  test:boolean;
  panelState="back";


  constructor(){
  }

  ngOnInit(){
    this.content = "About";
  }

  next(){
    /*this.isNext=true;
    this.isBack=false;*/
    this.panelState="next";
    this.content = "Next";

  }

  back(){
    /*this.isNext=false;
    this.isBack=true;*/
    this.panelState="back";
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
