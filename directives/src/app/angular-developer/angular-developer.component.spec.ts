import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDeveloperComponent } from './angular-developer.component';

describe('AngularDeveloperComponent', () => {
  let component: AngularDeveloperComponent;
  let fixture: ComponentFixture<AngularDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
