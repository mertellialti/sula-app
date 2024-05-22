import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentEndPage } from './payment-end.page';

describe('PaymentEndPage', () => {
  let component: PaymentEndPage;
  let fixture: ComponentFixture<PaymentEndPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PaymentEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
