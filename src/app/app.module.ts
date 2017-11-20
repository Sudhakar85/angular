import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubscriptionBillingProductsComponent, ApiService } from './subscription-billing-products/subscription-billing-products.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { NetTermComponent } from './net-term/net-term.component';
import { DellFinancialAccountComponent } from './dell-financial-account/dell-financial-account.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscriptionBillingProductsComponent,
    CreditCardComponent,
    NetTermComponent,
    DellFinancialAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  entryComponents: [CreditCardComponent, NetTermComponent, DellFinancialAccountComponent],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
