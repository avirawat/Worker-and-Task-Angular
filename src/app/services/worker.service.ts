import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Worker } from '../model/worker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkerService {
  private _baseurl = 'http://localhost:8073/work-service';

  constructor(private _http: HttpClient) {}

  getAllWorkers(): Observable<Worker[]> {
    let url = this._baseurl + '/work';
    return this._http.get<Worker[]>(url);
  }

  getById(workerId: number): Observable<Worker> {
    let url = this._baseurl + '/work/' + workerId;
    return this._http.get<Worker>(url);
  }

  getWorkersByStatus(availability: string): Observable<Worker[]> {
    let url = this._baseurl + '/work/availability/' + availability;
    return this._http.get<Worker[]>(url);
  }

  addWorker(worker: Worker): Observable<Worker> {
    let url = this._baseurl + '/work';
    const body = JSON.stringify(worker);
    console.log(body);
    return this._http.post<Worker>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }

  deleteWorker(workerId: number): Observable<any> {
    let url = this._baseurl + '/work/workerId/' + workerId;
    return this._http.delete(url);
  }
}
