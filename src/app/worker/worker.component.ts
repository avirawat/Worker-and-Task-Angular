import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Worker } from '../model/worker';
import { WorkerService } from '../services/worker.service';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css'],
})
export class WorkerComponent implements OnInit {
  workers: Worker[] = [];
  searchText: '';

  availabilityCheckedArray: any = [
    {
      id: 0,
      value: 'Available',
      checked: false,
      availability: 'Available',
    },
    {
      id: 1,
      value: 'Not-Available',
      checked: false,
      availability: 'Not-Available',
    },
  ];

  constructor(private workerService: WorkerService, private route: Router) {}

  ngOnInit(): void {
    this.workerService.getAllWorkers().subscribe(
      (workersList) => {
        this.workers = workersList;
        console.log(workersList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }

  onAvailabilityChange = (availability: any, event: any) => {
    this.availabilityCheckedArray.forEach((eachAvailability: any) => {
      if (eachAvailability.id == availability.id) {
        eachAvailability.checked = true;
      } else {
        eachAvailability.checked = false;
      }
    });

    if (event.target.checked == true) {
      this.workerService
        .getWorkersByStatus(availability.availability)
        .subscribe((workerByStatus) => {
          this.workers = workerByStatus;
        });
    } else {
      this.workerService.getAllWorkers().subscribe((workersList) => {
        this.workers = workersList;
      });
    }
  };
}
