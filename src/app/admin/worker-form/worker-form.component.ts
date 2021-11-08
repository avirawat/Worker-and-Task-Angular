import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Worker } from 'src/app/model/worker';
import { WorkerService } from 'src/app/services/worker.service';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css'],
})
export class WorkerFormComponent implements OnInit {
  workers: Worker;
  worker:Worker[] = [];
  constructor(private _route: Router, private _workerService: WorkerService) {}

  ngOnInit(): void {
    this.getAllWorkers();
  }
  getAllWorkers=()=>{
    this._workerService.getAllWorkers().subscribe(
      (workersList) => {
        this.worker = workersList;
        console.log(workersList);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  }
  onAddWorker = (workerForm: NgForm) => {
    console.log(workerForm.value);
    this._workerService.addWorker(workerForm.value).subscribe(
      (data: Worker) => {
      //  console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
  onClick = () => {
    this._route.navigate(['/add']);
  }
  onDeleteWorker = (workerId: number) => {
    this._workerService.deleteWorker(workerId).subscribe(
      () => console.log('Deleted'),
      (error) => console.log(error),
      () => console.log('completed')
    );
    this._route.navigate(['add/worker-form']);
    this.getAllWorkers();
  };

}
