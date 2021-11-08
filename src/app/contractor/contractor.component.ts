import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contract } from '../model/contract';
import { Priority } from '../model/priority.enum';
import { Status } from '../model/status.enum';
import { ContractorService } from '../services/contractor.service';

@Component({
  selector: 'app-contractor',
  templateUrl: './contractor.component.html',
  styleUrls: ['./contractor.component.css'],
})
export class ContractorComponent implements OnInit {
  contracts: Contract[];

  searchText = '';

  priorityCheckedArray: any = [
    {
      id: 0,
      value: 'HIGH',
      checked: false,
      contractPriority: Priority.HIGH,
    },
    {
      id: 1,
      value: 'LOW',
      checked: false,
      contractPriority: Priority.LOW,
    },
    {
      id: 3,
      value: 'MIDDLE',
      checked: false,
      contractPriority: Priority.MIDDLE,
    },
  ];

  statusCheckedArray: any = [
    {
      id: 0,
      value: 'INPROGRESS',
      checked: false,
      contractStatus: Status.INPROGRESS,
    },
    {
      id: 1,
      value: 'ONHOLD',
      checked: false,
      contractStatus: Status.ONHOLD,
    },
    {
      id: 2,
      value: 'COMPLETED',
      checked: false,
      contractStatus: Status.COMPLETED,
    },
    {
      id: 3,
      value: 'DEFINED',
      checked: false,
      contractStatus: Status.DEFINED,
    },
  ];

  constructor(
    private contractorService: ContractorService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.contractorService.getAllContracts().subscribe(
      (contractsList) => {
        this.contracts = contractsList; // console.log(contractsList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }

  onSearch = (contract: Contract) => {
    this.route.navigate(['/contract-details', contract.contractId]);
  };

  onStatusChange = (status: any, event: any) => {
    //console.log(status)
    this.statusCheckedArray.forEach((eachStatus: any) => {
      if (eachStatus.id == status.id) {
        eachStatus.checked = true;
      } else {
        eachStatus.checked = false;
      }
    });

    if (event.target.checked == true) {
      this.contractorService
        .getContractsByStatus(status.contractStatus)
        .subscribe((contractsByStatus) => {
          this.contracts = contractsByStatus;
          // console.log(contractsByStatus);
          // console.log(status.status);
        });
    } else {
      this.contractorService.getAllContracts().subscribe((contractsList) => {
        this.contracts = contractsList;
        // console.log(contractsList);
      });
    }

    this.priorityCheckedArray.forEach((eachPriority: any) => {
      eachPriority.checked = false;
    });
  };

  onPriorityChange = (priority: any, event: any) => {
    //console.log(priority)
    this.priorityCheckedArray.forEach((eachPriority: any) => {
      if (eachPriority.id == priority.id) {
        eachPriority.checked = true;
      } else {
        eachPriority.checked = false;
      }
    });
    if (event.target.checked == true) {
      this.contractorService
        .getContractsByPriority(priority.contractPriority)
        .subscribe((contractsByPriority) => {
          this.contracts = contractsByPriority;
          //console.log(contractsByPriority);
          // console.log(priority.contractPriority);
        });
    } else {
      this.contractorService.getAllContracts().subscribe((contractsList) => {
        this.contracts = contractsList;
        // console.log(contractsList);
      });
    }
    this.statusCheckedArray.forEach((eachStatus: any) => {
      eachStatus.checked = false;
    });
  };
}
