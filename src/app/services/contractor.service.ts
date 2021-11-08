import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../model/contract';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';

@Injectable({
  providedIn: 'root',
})
export class ContractorService {
  private _baseurl = 'http://localhost:8070/contractor-service';

  constructor(private _http: HttpClient) {}

  getAllContracts(): Observable<Contract[]> {
    let url = this._baseurl + '/contracts';
    return this._http.get<Contract[]>(url);
  }

  getById(contractId: number): Observable<Contract> {
    let url = this._baseurl + '/contracts/contractId/' + contractId;
    return this._http.get<Contract>(url);
  }

  getByContractName(contractName: string): Observable<Contract[]> {
    let url = this._baseurl + '/contracts/contractName/' + contractName;
    return this._http.get<Contract[]>(url);
  }

  getContractsByStatus(cStatus: Status): Observable<Contract[]> {
    let url = this._baseurl + '/contracts/status/' + cStatus;
    return this._http.get<Contract[]>(url);
  }

  getContractsByPriority(cPriority: Priority): Observable<Contract[]> {
    let url = this._baseurl + '/contracts/priority/' + cPriority;
    return this._http.get<Contract[]>(url);
  }

  addContract(contract: Contract): Observable<Contract> {
    let url = this._baseurl + '/contracts';
    // const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(contract);
    console.log(body);
    return this._http.post<Contract>(url, body, {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
      }),
    });
  }
}
