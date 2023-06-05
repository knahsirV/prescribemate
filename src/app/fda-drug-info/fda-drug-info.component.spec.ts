import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdaDrugInfoComponent } from './fda-drug-info.component';

describe('FdaDrugInfoComponent', () => {
  let component: FdaDrugInfoComponent;
  let fixture: ComponentFixture<FdaDrugInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdaDrugInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdaDrugInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
