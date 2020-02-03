import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VolcanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-volcan',
  templateUrl: 'volcan.html',
})
export class VolcanPage {
	volcan:any = [];

  latitudInicial:number = 20.620608;
  longitudInicial:number = -103.305311;

  cut = "https://i.ibb.co/sbZPMZr/volcan-1.png";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.volcan =  this.navParams.get("volcan");
  	console.log(this.volcan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolcanPage');
  }

}
