import { Component, OnInit } from '@angular/core';
import { GenericAPIService } from 'src/app/core/utils/services/api/generic-api.service';
import { UrlConstantService } from 'src/app/core/utils/services/common/url-constant.service';
import { ClientListData } from 'src/assets/mockData/clientList';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  public clientListUrl = UrlConstantService.clientList;
  clientListData =ClientListData;

  constructor(public _genericApiService: GenericAPIService) { }

  ngOnInit(): void {
  this.loadCLientList();
  }
  loadCLientList() {
    // this._genericApiService.getAll(this.clientListUrl).subscribe(response => {
    //   console.log('response', response);
    // })

  }


}
