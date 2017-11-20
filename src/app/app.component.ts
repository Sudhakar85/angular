import { Component, OnInit } from '@angular/core';
import { ApiService, ISubscriptionProduct } from './subscription-billing-products/subscription-billing-products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private apiService: ApiService) {}

  products: Array<ISubscriptionProduct>;

  ngOnInit() {
    this.products = this.apiService.getSubscriptionProducts();
  }

  next() {
    console.log(this.products);
  }

  private isAllPaymentFormsValid(): boolean {
    const result = this.products.filter((f) => {
      if (f.paymentData) {
        return f.paymentData.isFormValid === true;
      }
      return false;
    });
    return (result.length === this.products.length);
  }
}
