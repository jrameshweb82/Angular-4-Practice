import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthercityComponent } from './othercity.component';

describe('OthercityComponent', () => {
  let component: OthercityComponent;
  let fixture: ComponentFixture<OthercityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthercityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthercityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
