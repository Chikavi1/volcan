import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolcanesPage } from './volcanes';

@NgModule({
  declarations: [
    VolcanesPage,
  ],
  imports: [
    IonicPageModule.forChild(VolcanesPage),
  ],
})
export class VolcanesPageModule {}
