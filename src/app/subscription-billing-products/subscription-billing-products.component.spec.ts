import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionBillingProductsComponent } from './subscription-billing-products.component';

describe('SubscriptionBillingProductsComponent', () => {
  let component: SubscriptionBillingProductsComponent;
  let fixture: ComponentFixture<SubscriptionBillingProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionBillingProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionBillingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
