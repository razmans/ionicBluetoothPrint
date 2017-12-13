import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrinterListModalPage } from './printer-list-modal';

@NgModule({
  declarations: [
    PrinterListModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PrinterListModalPage),
  ],
})
export class PrinterListModalPageModule {}
