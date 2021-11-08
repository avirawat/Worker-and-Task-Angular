import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintenance } from '../model/maintenance';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';

@Injectable({
  providedIn: 'root',
})
export class MaintenanceService {
  private _baseurl = 'http://localhost:9000/contractor-service/contracts';

  constructor(private _http: HttpClient) {}

  getAllMaintenance(): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenance';
    return this._http.get<Maintenance[]>(url);
  }

  getMaintenancesByStatus(mStatus: Status): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenanceStatus/' + mStatus;
    return this._http.get<Maintenance[]>(url);
  }

  getMaintenancesByPriority(mPriority: Priority): Observable<Maintenance[]> {
    let url = this._baseurl + '/maintenancePriority/' + mPriority;
    return this._http.get<Maintenance[]>(url);
  }

  addMaintenance(maintenance: Maintenance): Observable<Maintenance> {
    let url = this._baseurl + '/maintenance';
    // const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(maintenance);
    console.log(body);
    return this._http.post<Maintenance>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }
}
