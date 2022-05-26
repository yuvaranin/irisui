import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { vendorRootData } from 'src/assets/mockData/vendorRootDataMockup';

@Component({
  selector: 'vendor-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  vendorData = vendorRootData;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  stopImpersonating() {
console.log("stop impersonation");
  }
  selectCulture(){
    console.log("selectCulture");

  }
}
