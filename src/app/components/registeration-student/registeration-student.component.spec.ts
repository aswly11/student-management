import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationStudentComponent } from './registeration-student.component';

describe('RegisterationStudentComponent', () => {
  let component: RegisterationStudentComponent;
  let fixture: ComponentFixture<RegisterationStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
