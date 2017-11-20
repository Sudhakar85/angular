import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DellFinancialAccountComponent } from './dell-financial-account.component';

describe('DellFinancialAccountComponent', () => {
  let component: DellFinancialAccountComponent;
  let fixture: ComponentFixture<DellFinancialAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DellFinancialAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DellFinancialAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
