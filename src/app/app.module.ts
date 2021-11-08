import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { TaskComponent } from './task/task.component';
import { WorkerComponent } from './worker/worker.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { ContractorComponent } from './contractor/contractor.component';
import { ContractorDetailsComponent } from './contractor-details/contractor-details.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { ResourceManagementComponent } from './resource-management/resource-management.component';
import { AdminModule } from './admin/admin.module';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContractorComponent,
    MaintenanceComponent,
    TaskComponent,
    WorkerComponent,
    PagenotfoundComponent,
    ContractorDetailsComponent,
    ResourceManagementComponent,
    AppNavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AdminModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
