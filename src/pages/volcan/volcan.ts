import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MAPCONFIG} from '../../models/map.data';

@Component({
  selector: 'page-volcan',
  templateUrl: 'volcan.html',
})
export class VolcanPage {
	volcan:any = [];
styles;

  latitudInicial:number = 20.620608;
  longitudInicial:number = -103.305311;

  cut = "https://i.ibb.co/sbZPMZr/volcan-1.png";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.volcan =  this.navParams.get("volcan");
    this.styles = MAPCONFIG;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VolcanPage');
  }

}
