import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Maintenance } from 'src/app/model/maintenance';
import { MaintenanceService } from 'src/app/services/maintenance.service';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css'],
})
export class MaintenanceFormComponent implements OnInit {
  maintenance: Maintenance;
  constructor(
    private _route: Router,
    private _maintenanceService: MaintenanceService
  ) {}

  ngOnInit(): void {}

  onAddMaintenance = (maintenanceForm: NgForm) => {
    //console.log(maintenanceForm.value);
    this._maintenanceService.addMaintenance(maintenanceForm.value).subscribe(
      (data: Maintenance) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
