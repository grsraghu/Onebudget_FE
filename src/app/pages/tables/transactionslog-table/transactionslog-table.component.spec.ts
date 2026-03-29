import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionslogTableComponent } from './transactionslog-table.component';

describe('TransactionslogTableComponent', () => {
  let component: TransactionslogTableComponent;
  let fixture: ComponentFixture<TransactionslogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionslogTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionslogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
