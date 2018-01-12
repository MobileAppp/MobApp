import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CuboidPage } from './cuboid';

@NgModule({
  declarations: [
    CuboidPage,
  ],
  imports: [
    IonicPageModule.forChild(CuboidPage),
  ],
})
export class CuboidPageModule {}
