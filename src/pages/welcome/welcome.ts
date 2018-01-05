import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  go(){
    this.navCtrl.push("SquarePage");
  }
  go1(){
    this.navCtrl.push("RectanglePage");
  }
  go2(){
    this.navCtrl.push("CirclePage");
  }
  go3(){
    this.navCtrl.push("TrianglePage");
  }
  
}
