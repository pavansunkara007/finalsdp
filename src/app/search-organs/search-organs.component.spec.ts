import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrgansComponent } from './search-organs.component';

describe('SearchOrgansComponent', () => {
  let component: SearchOrgansComponent;
  let fixture: ComponentFixture<SearchOrgansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchOrgansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOrgansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
