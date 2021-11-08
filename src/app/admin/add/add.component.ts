import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addFormButtons: any = [
    {
      id: 0,
      name: 'contract',
    },
    {
      id: 1,
      name: 'maintenance',
    },
    {
      id: 2,
      name: 'worker',
    },
    {
      id: 3,
      name: 'task',
    },
  ];

  constructor(private _route: Router) {}

  ngOnInit(): void {}

  onClickAddButton = (formbutton: any) => {
    // console.log(formbutton);
    this._route.navigate([`/add/${formbutton.name}-form`]);
  };
}
