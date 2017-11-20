import { Component, OnInit, ViewChild } from '@angular/core';
import { DellFinancialAccountViewModel } from './dell-financial-account-view.model';

@Component({
  selector: 'app-dell-financial-account',
  templateUrl: './dell-financial-account.component.html',
  styleUrls: ['./dell-financial-account.component.css']
})
export class DellFinancialAccountComponent implements OnInit {
  public vm: DellFinancialAccountViewModel = new DellFinancialAccountViewModel();
  @ViewChild('dfaForm') private form;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.vm.accountNumber = 'CUST012345';
    this.vm.name = 'INDIRAMOHAN';

  }

  private formChanged(value): void {
    this.vm.isFormValid = this.form.valid;
  }
}
