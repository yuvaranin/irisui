import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class AdminComponent implements OnInit {
  app = {
    name: 'GearBox Admin',
    description: 'GearBox Admin',
    year: ((new Date()).getFullYear()),
    layout: {
        isFixed: false,
        isCollapsed: false,
        isBoxed: false,
        isRTL: false,
        horizontal: false,
        isFloat: false,
        asideHover: false,
        theme: 'theme-g'
    },
    useFullLayout: false,
    hiddenFooter: false,
    offsidebarOpen: false,
    asideToggled: false,
    viewAnimation: 'ng-fadeInUp'
};
  constructor() { }

  ngOnInit(): void {
  }

}
