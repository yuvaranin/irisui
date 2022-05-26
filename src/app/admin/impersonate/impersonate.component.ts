import { Component, OnInit } from '@angular/core';
import  {ImpersonateData} from '../../../assets/mockData/impersonate';
@Component({
  selector: 'app-impersonate',
  templateUrl: './impersonate.component.html',
  styleUrls: ['./impersonate.component.css']
})
export class ImpersonateComponent implements OnInit {
  impersonateData =ImpersonateData;
  constructor() { }

  ngOnInit(): void {
  }

}
