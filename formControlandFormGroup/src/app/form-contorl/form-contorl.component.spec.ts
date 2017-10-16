import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContorlComponent } from './form-contorl.component';

describe('FormContorlComponent', () => {
  let component: FormContorlComponent;
  let fixture: ComponentFixture<FormContorlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormContorlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
