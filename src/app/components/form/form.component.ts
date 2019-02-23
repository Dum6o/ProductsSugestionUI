import { Component, OnInit } from '@angular/core';
import { DropDownItem } from 'src/app/interfaces/drop-down-item';
import { ApiService } from 'src/app/services/api.service';
import { ProductsRequest } from 'src/app/interfaces/products-request';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  ages: DropDownItem[];
  incomes: DropDownItem[];

  checked = false;

  selectedAge: number;
  selectedIncome: number;
  isStudent = false;

  isConnected: boolean;
  connectionError: any;
  response: string[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.checkConnection().subscribe(
      data => {
        this.isConnected = data;
      },
      error => this.connectionError = error
    );

    this.ages = [
      {text: '0-17', value: 1},
      {text: '18-64', value: 2},
      {text: '65+', value: 3},
    ];

    this.incomes = [
      {text: '0', value: 1},
      {text: '1-12000', value: 2},
      {text: '12001-40000', value: 3},
      {text: '40001', value: 4},
    ];
  }

  onSlideChange() {
    this.isStudent = !this.isStudent;
    this.checked = this.isStudent;
  }

  onSubmit() {
    const request: ProductsRequest = {
      ageId: this.selectedAge,
      isStudent: this.isStudent,
      incomeId: this.selectedIncome,
    };
    this.api.getProducts(request).subscribe(
      data => {
        this.response = data;
      }
    );
  }

  formReset() {
    this.selectedAge = this.selectedIncome = undefined;
    this.isStudent = false;
    this.checked = false;
    this.response = undefined;
  }
}
