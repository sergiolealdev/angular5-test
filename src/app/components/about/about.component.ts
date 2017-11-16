import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {KEY_CODE} from "../../app.component";
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes, query, stagger, group
} from '@angular/animations';
@Component ({
    selector:'about',
    templateUrl : './about.component.html',
    animations: [
      trigger('panelState1', [
        state('next', style({
          position: 'relative',
        })),
        state('back',   style({
          position: 'relative'
        })),
        transition('* => next', animate('1s',keyframes([
          style({ transform: 'translateX(0)'}),
          style({ transform: 'translateX(100%)'})
        ]))),
        transition('* => back', animate('1s',keyframes([
          style({ transform: 'translateX(100%)'}),
          style({ transform: 'translateX(%)'})
        ])))
      ]),
      trigger('animationTest',[
        transition('* => *', [
          query('.content',  stagger('300ms', [
          animate('800ms cubic-bezier(.75,-0.48,.26,1.52)' , style({ transform: 'translateX(-100%)'}))
          ]),
          {delay:500}),
          query(':self', [
            animate(500, style({ opacity:0 }))
          ]),
          query('.content', [
            animate(1, style({ transform: 'translateX(100%)'}))
          ]),
          query(':self', [
            animate(500, style('*'))
          ]),
          query('.content', stagger('300ms',[
            animate('800ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)'}))
          ])),
        ]),
      ])
    ]
})

export class AboutComponent implements OnInit{

  content: string;
  test:boolean;
  panelState="back";
  @ViewChild('myPanel')
  public myPanel;
  bindingVar = '';

  constructor() {}

  ngOnInit(){
    this.content = "Lorem ipsum dolor sit amet.";
  }

  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar === 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

  next(){
    this.panelState="next";
    this.content = "Next";

  }

  back(){
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
