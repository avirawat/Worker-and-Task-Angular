import { Status } from "./status.enum";

export class Task {
    constructor(
public taskId:number,
public taskName:string,
public organiser:string,
public tStartDate:string,
public tEndDate:string,
public durationDays:number,
public tStatus:Status,
public maintenanceId:number
    ){}
}
