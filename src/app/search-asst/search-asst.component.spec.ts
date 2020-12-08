import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAsstComponent } from './search-asst.component';

describe('SearchAsstComponent', () => {
  let component: SearchAsstComponent;
  let fixture: ComponentFixture<SearchAsstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAsstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAsstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
