import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { CreditCardViewModel } from './credit-card-view.model';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  public vm: CreditCardViewModel = new CreditCardViewModel();
  @ViewChild('creditCardForm') private form;

  constructor() { }

  ngOnInit() {
    this.init();
  }

  private init(): void {
    const states = ['AZ', 'TX', 'WA', 'VA'];
    this.vm.states = states;
  }

  private save(value): void {
    console.log(value);
  }

  private formChanged(value): void {
    this.vm.isFormValid = this.form.valid;
  }
}
