import {Component, OnInit} from '@angular/core';

@Component ({
    selector:'about',
    templateUrl : './about.component.html'
})

export class AboutComponent implements OnInit{

  isHidden: boolean;

  constructor(){
  }

  ngOnInit(){
    this.isHidden=false;
  }

}
