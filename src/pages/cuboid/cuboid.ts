import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CuboidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuboid',
  templateUrl: 'cuboid.html',
})
export class CuboidPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CuboidPage');
  }
go(){
  this.navCtrl.push("AreacuboidPage");
}
go1(){
  this.navCtrl.push("VolcuboidPage");
}
}
