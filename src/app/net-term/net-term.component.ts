import { Component, OnInit, ViewChild } from '@angular/core';
import { NetTermsViewModel } from './net-terms-view.model';

@Component({
  selector: 'app-net-term',
  templateUrl: './net-term.component.html',
  styleUrls: ['./net-term.component.css']
})
export class NetTermComponent implements OnInit {

  public vm: NetTermsViewModel = new NetTermsViewModel();
  @ViewChild('netTermsForm') private form;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    this.vm.frequency = 1;
    this.vm.term = 36;
  }

  private save(value): void {
    console.log(value);
  }

  private formChanged(value): void {
    this.vm.isFormValid = this.form.valid;
  }
}
