import { Maintenance } from './maintenance';
import { Priority } from './priority.enum';
import { Status } from './status.enum';

export class Contract {
  constructor(
    public contractName: string,
    public contractorName: string,
    public startDate: string,
    public endDate: string,
    public cStatus: Status,
    public cPriority: Priority,
    public contractImg: string,
    public maintenanceList: Set<Maintenance>,
    public contractId?: number
  ) {}
}
