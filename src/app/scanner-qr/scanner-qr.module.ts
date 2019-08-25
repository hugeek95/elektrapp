import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ScannerQrPage } from './scanner-qr.page';

const routes: Routes = [
  {
    path: 'qr',
    component: ScannerQrPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScannerQrPage,
    RouterModule.forChild(routes)
  ],
  declarations: [ScannerQrPage]
})
export class ScannerQrPageModule { }
