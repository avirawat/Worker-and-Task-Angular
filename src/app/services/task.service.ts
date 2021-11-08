import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _baseurl=""

  constructor(private _http:HttpClient) { }

  getAllTask():Observable<Task[]>{
    let url=this._baseurl+"/task"
    return this._http.get<Task[]>(url);
  }
}
