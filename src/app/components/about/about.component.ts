import {Component, HostBinding, HostListener, OnInit, ViewChild} from '@angular/core';
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
     trigger('movePanel',[
        transition('* => left', [
          group([
            query('.content',  stagger('300ms', [
              animate('800ms cubic-bezier(.75,-0.48,.26,1.52)' , style({ transform: 'translateX(-100%)'}))
              ]),
            ),
            query(':self', [
              animate(1000, style({ opacity:0 }))
            ]),
          ]),
            query('.content', [
              animate(1, style({ transform: 'translateX(100%)'}))
            ]),
          group([
            query(':self', [
              animate(1000, style('*'))
            ]),
            query('.content', stagger('300ms',[
              animate('800ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)'}))
            ])),
          ]),
        ]),
       transition('* => right', [
         group([
           query('.content',  stagger('300ms', [
               animate('800ms cubic-bezier(.75,-0.48,.26,1.52)' , style({ transform: 'translateX(100%)'}))
             ]),
           ),
           query(':self', [
             animate(1000, style({ opacity:0 }))
           ]),
         ]),
         query('.content', [
           animate(1, style({ transform: 'translateX(-100%)'}))
         ]),
         group([
           query(':self', [
             animate(1000, style('*'))
           ]),
           query('.content', stagger('300ms',[
             animate('800ms cubic-bezier(.75,-0.48,.26,1.52)', style({ transform: 'translateX(0%)'}))
           ])),
         ]),
       ]),
      ])
    ]
})

export class AboutComponent implements OnInit{

  movement:string;

  constructor() {}

  ngOnInit(){
  }

  next(){
    this.movement="right";
  }

  back(){
    this.movement="left";
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
