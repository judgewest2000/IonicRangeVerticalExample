import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('ranger') ranger: ElementRef;

  constructor(public navCtrl: NavController) {

  }

  value = 200;

  ngAfterContentInit() {
    const element = this.ranger.nativeElement as HTMLInputElement;

    element.onchange = changeEvent => {
      this.value = parseInt(element.value);
    };
  }

}
