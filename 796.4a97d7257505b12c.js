"use strict";(self.webpackChunkirisui=self.webpackChunkirisui||[]).push([[796],{8796:(C,l,o)=>{o.r(l),o.d(l,{ClientsModule:()=>A});var s=o(9808),a=o(5358),c=o(7055);const d={Items:[{Id:646,Name:"Allegion MRC",IsActive:!0},{Id:619,Name:"Allied 2 (ACE) - BEACON EXCHANGE",IsActive:!0},{Id:578,Name:"AlliedCMS (AIM) - Beacon MARKETING",IsActive:!0},{Id:618,Name:"Andy's Restaurant",IsActive:!0},{Id:593,Name:"Anytime Fitness",IsActive:!0},{Id:651,Name:"Anytime Fitness Australia",IsActive:!0},{Id:679,Name:"Butler Manufacturing",IsActive:!0},{Id:623,Name:"City Wide - City Market",IsActive:!0},{Id:674,Name:"Cornerstone Building Brands - Anniversary Store",IsActive:!0},{Id:644,Name:"Cox Know Your Numbers",IsActive:!0}],NextPageLink:null,Count:62};var e=o(1223),u=o(9545);function v(t,n){if(1&t&&(e.TgZ(0,"tr",34)(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"a",35),e._uU(7,"Edit"),e.qZA()()()),2&t){const i=n.$implicit;e.xp6(2),e.Oqu(i.Id),e.xp6(2),e.Oqu(i.Name),e.xp6(2),e.MGl("href","/Admin/Client/Edit/",i.Id,"",e.LSH)}}function g(t,n){1&t&&(e.TgZ(0,"tr",36)(1,"td",37),e._uU(2,"No records found."),e.qZA()())}const m=[{path:"",component:(()=>{class t{constructor(i){this._genericApiService=i,this.clientListUrl=c.D.clientList,this.clientListData=d}ngOnInit(){this.loadCLientList()}loadCLientList(){}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(u.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-clients-list"]],decls:60,vars:4,consts:[["ng-show","!viewModel.ShowClientDetails",1,"row","gearbox-animate-ng-hide-remove"],[1,"col-md-12"],[1,"panel","panel-default","panel-themed","gearbox-animate-ng-enter"],[1,"panel-heading","header"],["translate","",1,"panel-title"],[1,"panel-body"],[1,"row"],[1,"col-md-12","text-center"],["ng-if","$root.viewport != 'visible-xs'"],["href","/Admin/Client/Create",1,"btn","btn-success","btn-themed"],[1,"fa","fa-plus"],["ng-if","$root.viewport == 'visible-xs'","href","/Admin/Client/Create","translate","",1,"btn","btn-success","btn-themed"],[1,"small-space"],[1,"panel-title"],["st-table","clients","st-pipe","loadClientTable",1,"col-md-12"],["gearbox-loading-spinner","clientTable.isLoading"],["ng-style","{ 'margin-top': $root.viewport == 'visible-xs' ? '10px' : '0' }",1,"col-md-3","col-sm-6"],["for","pageSizeSelect","translate","",1,"control-label"],["id","pageSizeSelect","ng-options","o as o for o in $root.tablePageSizeOptions","ng-model","clientTable.pageSize",1,"form-control"],["for","activeStatusFilter",1,"control-label"],["id","activeStatusFilter","st-search-model","","st-predicate","activeStatus","ng-options","o.value as o.label for o in activeStatusFilterOptions","ng-model","viewModel.ActiveStatus",1,"form-control"],["value",""],["ng-style","{ 'margin-top': $root.viewport == 'visible-sm' ? '10px' : '0' }",1,"col-md-6","col-sm-12"],["ng-show","$root.viewport == 'visible-xs'",1,"extra-small-space"],["for","search","translate","",1,"control-label"],["st-search","","type","search",1,"form-control",3,"placeholder"],["ng-style","{ 'overflow-x': $root.viewport == 'visible-xs' ? 'scroll' : 'auto' }",1,"row"],[1,"table","responsive-table",2,"margin-bottom","0"],["st-sort","Id"],["st-sort","Name","st-sort-default","true"],["ng-class","{ danger: !row.IsActive }",4,"ngFor","ngForOf"],["class","no-hover",4,"ngIf"],["st-pagination","","st-items-by-page","clientTable.parsedPageSize"],["ng-if","viewModel.ShowClientDetails",1,"row"],["ng-class","{ danger: !row.IsActive }"],[3,"href"],[1,"no-hover"],["colspan","3","translate",""]],template:function(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Create a New Client"),e.qZA()(),e.TgZ(6,"div",5)(7,"div",6)(8,"div",7)(9,"h4",8),e._uU(10,"Click here to create a new Client: \xa0 \xa0 "),e.TgZ(11,"a",9),e._UZ(12,"i",10),e._uU(13," Create"),e.qZA()(),e.TgZ(14,"a",11),e._uU(15,"Create Client"),e.qZA()()()()(),e._UZ(16,"div",12),e.TgZ(17,"div",2)(18,"div",3)(19,"h4",13),e._uU(20,"Clients"),e.qZA()(),e.TgZ(21,"div",5)(22,"div",6)(23,"div",14),e._UZ(24,"div",15),e.TgZ(25,"div",6)(26,"div",16)(27,"label",17),e._uU(28,"Results per Page"),e.qZA(),e._UZ(29,"select",18),e.qZA(),e.TgZ(30,"div",16)(31,"label",19),e._uU(32,"Active Status"),e.qZA(),e.TgZ(33,"select",20)(34,"option",21),e._uU(35,"All"),e.qZA()()(),e.TgZ(36,"div",22),e._UZ(37,"div",23),e.TgZ(38,"label",24),e._uU(39,"Search"),e.qZA(),e._UZ(40,"input",25),e.qZA()(),e._UZ(41,"div",12),e.TgZ(42,"div",26)(43,"div",1)(44,"table",27)(45,"thead")(46,"tr")(47,"th",28),e._uU(48,"Id"),e.qZA(),e.TgZ(49,"th",29),e._uU(50,"Name"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"Action"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,v,8,3,"tr",30),e.YNc(55,g,3,0,"tr",31),e.qZA(),e._UZ(56,"tfoot"),e.qZA()()(),e._UZ(57,"div",32),e.qZA()()()()()(),e.TgZ(58,"div",33),e._UZ(59,"div",1),e.qZA()),2&i&&(e.xp6(40),e.hYB("placeholder","","Search within"," ","Clients","..."),e.xp6(14),e.Q6J("ngForOf",r.clientListData.Items),e.xp6(1),e.Q6J("ngIf",!r.clientListData.Items))},directives:[s.sg,s.O5],styles:[""]}),t})()}];let p=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.Bz.forChild(m)],a.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,p]]}),t})()}}]);