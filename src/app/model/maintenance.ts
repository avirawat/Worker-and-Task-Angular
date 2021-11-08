import { Contract } from './contract';
import { Priority } from './priority.enum';
import { Status } from './status.enum';
import { Task } from './task';

export class Maintenance {
  constructor(
    public maintenanceId: number,
    public maintenanceName: string,
    public maintenanceManager: string,
    public mStartDate: string,
    public mEndDate: string,
    public mstatus: Status,
    public mPriority: Priority,
    public maintenanceImg: string,
    public contract: Contract,
    public taskList: Set<Task>
  ) {}
}
