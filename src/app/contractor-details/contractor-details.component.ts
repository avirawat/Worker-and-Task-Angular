import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contract } from '../model/contract';
import { ContractorService } from '../services/contractor.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css']
})
export class ContractorDetailsComponent implements OnInit {
  contractId: number;
  contract: Contract;
  constructor(
    private _contractorService: ContractorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (map) => (this.contractId = parseInt(map.get('id')))
    );

    this._contractorService.getById(this.contractId).subscribe((response) => {
      this.contract = response;
      console.log(this.contract);
    });
}
}
