import { Component, OnInit } from '@angular/core';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.page.html',
  styleUrls: ['./scanner-qr.page.scss'],
})
export class ScannerQrPage implements OnInit {

  constructor(private qrscanner: QRScanner) { }

  ngOnInit() {
    

  }

  scanCode(){
    console.log('escaneando')
    this.qrscanner.scan();

  }


}
