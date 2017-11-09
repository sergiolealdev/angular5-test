import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {KEY_CODE} from "../../app.component";
import {
  trigger,
  state,
  style,
  animate,
  transition, keyframes, AnimationBuilder
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
        transition('* => next', animate('1s',keyframes([
          style({ left: '0%'}),
          style({ left: '-100%'})
        ]))),
        transition('next => back', animate('1s 1s',keyframes([
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
  @ViewChild('myPanel')
  public myPanel;

  constructor(private _builder: AnimationBuilder) {}

  makeAnimation() {
    // first build the animation
    const myAnimation = this._builder.build([
      style({
        position: 'relative',
        left:'0%'
      }),
      animate(500, keyframes([
        style({ left: '0%'}),
        style({ left: '-100%'})
      ])),
      style({
        position: 'relative',
      }),
      animate(500, keyframes([
        style({ left: '100%',width: '0%'}),
        style({ left: '0%',width: '50%'}),
        style({ width: '100%',margin:"10px"})
      ]))
    ]);

    // then create a player from it
    console.log("1");
    const player = myAnimation.create(this.myPanel.nativeElement, {});
    console.log("2");
    player.play();
    console.log("3");
  }
  ngOnInit(){
    this.content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet felis ipsum. Sed quis feugiat metus. Morbi pulvinar iaculis pharetra. In id ipsum quis metus convallis ullamcorper eu nec tortor. Aenean scelerisque convallis fringilla. Donec nec diam finibus, consectetur urna nec, aliquam nibh. Fusce eget tellus eget eros gravida mollis.\n" +
      "\n" +
      "Sed eleifend nulla in libero ultricies vestibulum. Donec venenatis, ex nec porta elementum, nisl turpis fringilla erat, a ullamcorper tellus neque eget sapien. Mauris gravida felis ac euismod pharetra. Nam id dignissim tortor. Sed accumsan magna nec nunc fringilla maximus. Etiam dignissim laoreet sagittis. Duis urna quam, gravida sed lorem pharetra, ultrices imperdiet enim.\n" +
      "\n" +
      "Cras bibendum dolor volutpat lacus pretium ultricies. Praesent at sem orci. Sed auctor accumsan ligula, vitae ultricies odio. Suspendisse bibendum eleifend sapien et ultrices. Nulla fermentum sem et est consectetur, at cursus odio fringilla. Proin efficitur justo viverra sem convallis interdum. Sed ultrices posuere nisi, vel placerat justo ultricies eu. Suspendisse quis urna condimentum velit tincidunt malesuada. Curabitur nec enim sed elit interdum scelerisque eu vel erat. Etiam nec ligula tincidunt, laoreet orci id, aliquet turpis. Vivamus luctus tortor tellus, et blandit odio sodales id. Maecenas nec lorem pretium, fringilla risus quis, vestibulum metus. Sed vitae tellus nisi. Praesent porttitor egestas tortor nec suscipit.\n" +
      "\n" +
      "Nam rhoncus risus sed ligula dapibus varius. Maecenas fringilla lacus quis iaculis laoreet. Nam faucibus lorem risus, eget cursus mauris scelerisque ac. Donec vitae lectus mi. Morbi accumsan a urna sed convallis. Curabitur sit amet orci mollis, varius augue a, facilisis nisl. Morbi in nunc scelerisque, pretium neque nec, hendrerit eros. Nullam augue lorem, ornare quis urna sed, imperdiet pretium nisl. In accumsan massa nec elit blandit, in aliquam magna volutpat. Etiam ullamcorper libero velit, eget faucibus enim lobortis nec. Integer lobortis quam ut bibendum commodo. Cras ac eleifend erat, vitae maximus augue. Cras congue, ipsum id blandit tempus, orci ex elementum risus, eu egestas justo odio at ante. Duis neque risus, efficitur vel purus ac, efficitur cursus enim. Mauris elementum augue maximus purus scelerisque mollis.\n" +
      "\n" +
      "Praesent aliquet eu erat at consequat. Nullam lacus lacus, laoreet a iaculis id, semper et purus. Donec vitae dolor leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla vestibulum efficitur mollis. Aenean id massa a elit lobortis vulputate non ac augue. Quisque porta, lorem eu aliquet sagittis, sem mi fringilla mi, nec auctor nunc odio a metus. Mauris eu ultricies neque, ac malesuada justo. Phasellus ut laoreet leo, a sagittis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi quam nunc, venenatis at maximus et, suscipit viverra mi. Donec ultrices ex tortor, ut feugiat dolor convallis a. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pretium aliquet mauris, eu pellentesque ante semper gravida.";
  }

  next(){
    /*this.isNext=true;
    this.isBack=false;*/
    /*this.panelState="next";
    this.panelState="back";*/
    this.makeAnimation();
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
