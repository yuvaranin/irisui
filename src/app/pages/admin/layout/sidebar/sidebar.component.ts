import { Component, OnInit } from '@angular/core';
import { SidemenuList } from 'src/assets/mockData/sideMenuList';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sideMenuItems=SidemenuList.getAdminSidebar;
  collapseSideMenu:boolean=true;
  applicationVersion:any;
  deploymentDate :any;

  toggle: any = {};
  constructor() { }

  ngOnInit(): void {
  }
toggleCollapse(){
  this.collapseSideMenu = !this.collapseSideMenu;

}
}
