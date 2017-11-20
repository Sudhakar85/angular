import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetTermComponent } from './net-term.component';

describe('NetTermComponent', () => {
  let component: NetTermComponent;
  let fixture: ComponentFixture<NetTermComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetTermComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
