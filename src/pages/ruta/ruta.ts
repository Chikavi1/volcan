import { Component } from '@angular/core';
import { NavController,NavParams,ModalController } from 'ionic-angular';
import { UbicacionProvider } from '../../providers/ubicacion/ubicacion';
import { Observable } from 'rxjs/Observable';
import { FormPage } from '../form/form';
import * as moment from 'moment';
//import swal from 'sweetalert';
import {MAPCONFIG} from '../../models/map.data';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-ruta',
  templateUrl: 'ruta.html',
})

export class RutaPage {

  ruta;
  nombre_usuario;

  latitudInicial:number = 20.620608;
  longitudInicial:number = -103.305311;


  icon= "https://i.ibb.co/L16MJjx/icon-1.png";
  cut = "https://i.ibb.co/sbZPMZr/volcan-1.png";
  volcanes:any = [] ;


  init = false;
  styles;


  constructor(public navCtrl: NavController,
  			  public navparams:NavParams,
  			  public modalCtrl: ModalController,
  	 		  public _ubicacionProv: UbicacionProvider,
  	 		  ) {
      this.styles = MAPCONFIG;
      		this._ubicacionProv.obtenerCamiones().subscribe(data => {


 			this.volcanes = data.map(e => { 				
		        
		          return {
		            id: e.payload.doc.id,
		            nombre: e.payload.doc.data()['nombre'],
		            lng: e.payload.doc.data()['lng'],
		            lat: e.payload.doc.data()['lat']
		        };
		        })
          		console.log(this.volcanes);
	    	  });
 			
			

  }






}
