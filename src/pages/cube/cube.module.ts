import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CubePage } from './cube';

@NgModule({
  declarations: [
    CubePage,
  ],
  imports: [
    IonicPageModule.forChild(CubePage),
  ],
})
export class CubePageModule {}
