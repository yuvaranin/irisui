import { Component, OnInit } from '@angular/core';
import { vendorRootData } from 'src/assets/mockData/vendorRootDataMockup';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
vendorData=vendorRootData;
  constructor() { }

  ngOnInit(): void {
  }

}
