import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contract } from 'src/app/model/contract';
import { ContractorService } from 'src/app/services/contractor.service';

@Component({
  selector: 'app-contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
})
export class ContractFormComponent implements OnInit {
  contract: Contract;
  errorMessage: string;
  constructor(
    private _route: Router,
    private _contractService: ContractorService
  ) {}

  ngOnInit(): void {}
 

  onAddContract = (contractForm: NgForm) => {
    console.log(contractForm.value);
    this._contractService.addContract(contractForm.value).subscribe(
      (data: Contract) => {
        console.log(data);
      },
      (error) => console.log(error),
      () => console.log('completed')
    );
  };
}
