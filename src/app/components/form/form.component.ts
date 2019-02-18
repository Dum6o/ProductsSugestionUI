import { Component, OnInit } from '@angular/core';
import { DropDownItem } from 'src/app/interfaces/drop-down-item';
import { FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit() {
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
  }

  onSubmit() {
    this.formReset();
  }

  formReset() {
    this.selectedAge = this.selectedIncome = undefined;
    this.isStudent = this.checked = false;
  }
}
