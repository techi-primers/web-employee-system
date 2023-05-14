import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetEmployeeInformationComponent } from './get-employee-information.component';

describe('GetEmployeeInformationComponent', () => {
  let component: GetEmployeeInformationComponent;
  let fixture: ComponentFixture<GetEmployeeInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetEmployeeInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetEmployeeInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
