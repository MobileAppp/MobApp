import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RectanglePage } from './rectangle';

@NgModule({
  declarations: [
    RectanglePage,
  ],
  imports: [
    IonicPageModule.forChild(RectanglePage),
  ],
})
export class RectanglePageModule {}
