import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ContractFormComponent } from './contract-form/contract-form.component';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { WorkerFormComponent } from './worker-form/worker-form.component';

const routes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'add/contract-form', component: ContractFormComponent },
  { path: 'add/maintenance-form', component: MaintenanceFormComponent },
  { path: 'add/task-form', component: TaskFormComponent },
  { path: 'add/worker-form', component: WorkerFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
