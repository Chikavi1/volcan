import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolcanPage } from './volcan';

@NgModule({
  declarations: [
    VolcanPage,
  ],
  imports: [
    IonicPageModule.forChild(VolcanPage),
  ],
})
export class VolcanPageModule {}
