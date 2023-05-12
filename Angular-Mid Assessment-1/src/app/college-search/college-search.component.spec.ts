import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeSearchComponent } from './college-search.component';

describe('CollegeSearchComponent', () => {
  let component: CollegeSearchComponent;
  let fixture: ComponentFixture<CollegeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
