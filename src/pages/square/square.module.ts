import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SquarePage } from './square';

@NgModule({
  declarations: [
    SquarePage,
  ],
  imports: [
    IonicPageModule.forChild(SquarePage),
  ],
})
export class SquarePageModule {}
