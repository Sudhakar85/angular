import { Injectable, Component, Input, OnInit, ComponentFactoryResolver, ViewChildren, ViewContainerRef, QueryList, ComponentRef } from '@angular/core';
import { CreditCardComponent } from '../credit-card/credit-card.component';
import { NetTermComponent } from '../net-term/net-term.component';
import { DellFinancialAccountComponent } from '../dell-financial-account/dell-financial-account.component';
import { CreditCardViewModel } from '../credit-card/credit-card-view.model';
import { NetTermsViewModel } from '../net-term/net-terms-view.model';
import { DellFinancialAccountViewModel } from '../dell-financial-account/dell-financial-account-view.model';

@Component({
  selector: 'app-subscription-billing-products',
  templateUrl: './subscription-billing-products.component.html',
  styleUrls: ['./subscription-billing-products.component.css']
})
export class SubscriptionBillingProductsComponent implements OnInit {

  @Input()
  products: Array<ISubscriptionProduct>;
  selectedPayment: string;

  @ViewChildren('containerRef', { read: ViewContainerRef }) private containers: QueryList<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onPaymentChange(selectedPayment: string, id: number) {
      const container = this.containers.find((f) => f.element.nativeElement.id === String(id));

      switch (selectedPayment) {
        case 'Credit Card':
          this.loadComponent(CreditCardComponent, container, id - 1);
          break;
        case 'Net Terms':
          this.loadComponent(NetTermComponent, container, id - 1);
          break;
        case 'Dell Financial Account':
          this.loadComponent(DellFinancialAccountComponent, container, id - 1);
          break;
        default:
          break;
      }
  }

  private loadComponent(type: any, container: ViewContainerRef, index: number) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
    container.clear();

    const componentRef: any = container.createComponent(componentFactory);
    if (type === CreditCardComponent) {
        this.products[index]['paymentData'] = new CreditCardViewModel();
    } else if (type === NetTermComponent) {
      this.products[index]['paymentData'] = new NetTermsViewModel();
    } else if (type === DellFinancialAccountComponent) {
      this.products[index]['paymentData'] = new DellFinancialAccountViewModel();
    }
    componentRef.instance.vm = this.products[index]['paymentData'];
  }
}

export interface ISubscriptionProduct {
  title: string;
  paymentMethods: Array<IPaymentMethod>;
  disclosureText: string;
  disclosureConfirmation: boolean;
  isApos: boolean;
  hasBillPlan: boolean;
  selectedPayment: string;
  paymentData: any;
}

export interface IPaymentMethod {
  paymentName: string;
}


@Injectable()
export class ApiService {
  public getSubscriptionProducts(): Array<ISubscriptionProduct> {
    return [
      { title: 'Office 365',
        paymentMethods: [{ paymentName: 'Dell Financial Account'}, {paymentName: 'Net Terms'}, {paymentName: 'Credit Card' }],
        disclosureText: 'Disclouser 1',
        disclosureConfirmation: false,
        isApos: false,
        hasBillPlan: false,
        selectedPayment: 'Select Payment',
        paymentData: undefined
     },
     { title: 'Azure',
     paymentMethods: [{ paymentName: 'Dell Financial Account'}, {paymentName: 'Net Terms'}, {paymentName: 'Credit Card' }],
     disclosureText: 'Disclouser 2',
     disclosureConfirmation: false,
     isApos: false,
     hasBillPlan: false,
     selectedPayment: 'Select Payment',
     paymentData: undefined
    },
    { title: 'Product 3',
    paymentMethods: [{ paymentName: 'Dell Financial Account'}, {paymentName: 'Net Terms'}, {paymentName: 'Credit Card' }],
    disclosureText: 'Disclouser 3',
    disclosureConfirmation: false,
    isApos: false,
    hasBillPlan: false,
    selectedPayment: 'Select Payment',
    paymentData: undefined
   }
  ];
  }
}
