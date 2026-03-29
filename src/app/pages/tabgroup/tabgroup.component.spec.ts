import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgroupComponent } from './tabgroup.component';

describe('TabgroupComponent', () => {
  let component: TabgroupComponent;
  let fixture: ComponentFixture<TabgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabgroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
