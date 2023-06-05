import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffCounterComponent } from './off-counter.component';

describe('OffCounterComponent', () => {
  let component: OffCounterComponent;
  let fixture: ComponentFixture<OffCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
