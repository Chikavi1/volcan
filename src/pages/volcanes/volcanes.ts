import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';
import {VolcanPage} from '../volcan/volcan';

@Component({
  selector: 'page-volcanes',
  templateUrl: 'volcanes.html',
})
export class VolcanesPage {
volcanes:any = [];

  constructor(	public navCtrl: NavController,
  				public navParams: NavParams,
  				public _ubicacionProv: UbicacionProvider) {

  this._ubicacionProv.obtenerCamiones().subscribe(data => {


 			this.volcanes = data.map(e => { 				
		        
		          return {
		            id: e.payload.doc.id,
		            nombre: e.payload.doc.data()['nombre'],
		            lng: e.payload.doc.data()['lng'],
		            lat: e.payload.doc.data()['lat'],
		            altura: e.payload.doc.data()['altura'],
		            lugar: e.payload.doc.data()['lugar'],
		            img: e.payload.doc.data()['img'],
		            tipo: e.payload.doc.data()['tipo'],
		            descripcion: e.payload.doc.data()['descripcion']
		        };
		        });
          		console.log(this.volcanes);
	    	  });
 
  
  }
  
   irVolcan(volcan){
    this.navCtrl.push(VolcanPage,{volcan : volcan});
  }

}
