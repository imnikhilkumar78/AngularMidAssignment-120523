import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { college } from '../collegeModel';
@Component({
  selector: 'app-college-search',
  template: ``,
})
export class CollegeSearchComponent implements OnInit {
  ngOnInit(): void {
    // this.searchCollege();
  }
  @Input() name: string = '';
  @Input() city: string = '';
  @Output() returningListOfCollege = new EventEmitter<any>();

  colleges: college[] = [
    { name: 'BTI', city: 'Bengaluru' },
    { name: 'RVCE', city: 'Bengaluru' },
    { name: 'GEC SURAT', city: 'Gujarat' },
    { name: 'MSU VADODRA', city: 'Gujarat' },
  ];

  listOfCollegetoReturn: college[] = [];
  searchCollege() {
    this.listOfCollegetoReturn = this.colleges.filter(
      (college) => college.city === this.city
    );
    this.returningListOfCollege.emit(this.listOfCollegetoReturn);
  }
}
