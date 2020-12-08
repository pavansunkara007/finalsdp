import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsstComponent } from './asst.component';

describe('AsstComponent', () => {
  let component: AsstComponent;
  let fixture: ComponentFixture<AsstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
