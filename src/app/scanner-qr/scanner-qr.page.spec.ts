import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScannerQrPage } from './scanner-qr.page';

describe('ScannerQrPage', () => {
  let component: ScannerQrPage;
  let fixture: ComponentFixture<ScannerQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScannerQrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScannerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
