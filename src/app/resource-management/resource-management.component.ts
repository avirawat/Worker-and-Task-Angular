import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-management',
  templateUrl: './resource-management.component.html',
  styleUrls: ['./resource-management.component.css']
})
export class ResourceManagementComponent implements OnInit {

   tabs = ["Maintenance","Nine To Fivers","Servcie Allocation"];
   selectedList:any;

  constructor() { }

  ngOnInit(): void {
  }
  openTab(tab:any){
this.selectedList = tab;
  }

}
