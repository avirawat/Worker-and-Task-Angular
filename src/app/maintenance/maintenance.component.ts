import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Maintenance } from '../model/maintenance';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';
import { MaintenanceService } from '../services/maintenance.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  maintenances:Maintenance[]
  searchText='';

  priorityCheckedArray:any=[
    {
    id: 0,
    value:"HIGH",
    checked:false,
    maintenancePriority: Priority.HIGH,
    },
   {
    id: 1,
    value:"LOW",
    checked:false,
    maintenancePriority: Priority.LOW
   },
   {
    id: 3,
    value:"MIDDLE",
    checked:false,
    maintenancePriority: Priority.MIDDLE
   }];
  
  statusCheckedArray:any=[
  {
  id: 0,
  value:"INPROGRESS",
  checked:false,
  maintenanceStatus: Status.INPROGRESS,
  },
 {
  id: 1,
  value:"ONHOLD",
  checked:false,
  maintenanceStatus: Status.ONHOLD
 },
 {
  id: 2,
  value:"COMPLETED",
  checked:false,
  maintenanceStatus: Status.COMPLETED
 },
 {
  id: 3,
  value:"DEFINED",
  checked:false,
  maintenanceStatus: Status.DEFINED
 }];

  constructor(private maintenanceService:MaintenanceService,private route:Router) { }

  ngOnInit(): void {
    this.maintenanceService.getAllMaintenance().subscribe(
      (maintenancesList)=>{this.maintenances=maintenancesList
     // console.log(maintenancesList)
    },
      error =>console.log(error),
      ()=>console.log('completed')
    )
  }

  
onStatusChange = (status:any,event:any)=>{
 // console.log(status)
this.statusCheckedArray.forEach((eachStatus:any)=>{
  if(eachStatus.id== status.id){
    eachStatus.checked = true;
  }else{
    eachStatus.checked = false;
  }
})

if(event.target.checked == true){
  this.maintenanceService.getMaintenancesByStatus(status.maintenanceStatus).subscribe((maintenanceByStatus)=>{
    this.maintenances= maintenanceByStatus;
    // console.log(maintenanceByStatus);
    // console.log(status.maintenanceStatus);
  })
}else{
  this.maintenanceService.getAllMaintenance().subscribe(
    (maintenancesList)=>{
      this.maintenances=maintenancesList;
      // console.log(maintenancesList);
    }
  );
}

this.priorityCheckedArray.forEach((eachPriority:any)=>{
 eachPriority.checked = false;
})
}


onPriorityChange = (priority:any,event:any)=>{
  //console.log(priority)
  this.priorityCheckedArray.forEach((eachPriority:any)=>{
    if(eachPriority.id== priority.id){
      eachPriority.checked = true;
    }else{
      eachPriority.checked = false;
    }
  })
  if(event.target.checked == true){
    this.maintenanceService.getMaintenancesByPriority(priority.maintenancePriority).subscribe((maintenanceByPriority)=>{
      this.maintenances= maintenanceByPriority;
      //console.log(maintenanceByPriority);
     // console.log(priority.maintenancePriority);
    })
  }else{
    this.maintenanceService.getAllMaintenance().subscribe(
      (maintenancesList)=>{
        this.maintenances=maintenancesList;
        // console.log(maintenancePriority);
      }
    );
  }
  this.statusCheckedArray.forEach((eachStatus:any)=>{
    eachStatus.checked = false;
  })
}

}
