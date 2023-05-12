import { Component, OnInit, ViewChild } from '@angular/core';
import { CollegeSearchComponent } from '../college-search/college-search.component';
import { college } from '../collegeModel';
@Component({
  selector: 'app-parent',
  template: `
    <div
      style="display: flex; justify-content: center; align-items: center; flex-direction: column;"
    >
      <label style="margin-top: 1rem; margin-bottom: 0.5rem;"
        >Enter Student Name</label
      >
      <input
        type="text"
        #name
        placeholder="Student Name"
        style="padding: 0.5rem; margin-bottom: 1rem; border: 1px solid black; border-radius: 4px;"
      />
      <label style="margin-bottom: 0.5rem;">Enter City</label>
      <input
        type="text"
        #city
        placeholder="City"
        style="padding: 0.5rem; margin-bottom: 1rem; border: 1px solid black; border-radius: 4px;"
      />
      <button
        (click)="searchCity(name.value, city.value)"
        style="padding: 0.5rem 1rem; background-color: blue; color: white; border: none; border-radius: 4px; cursor: pointer;"
      >
        Search City
      </button>
    </div>
    <app-college-search
      [name]="studentName"
      [city]="cityToSearch"
      #collegeList
      (returningListOfCollege)="updatedCollegeList = $event"
    ></app-college-search>
    <h2>List of Filtered Colleges</h2>
    <ul>
      <li *ngFor="let college of updatedCollegeList">{{ college.name }}</li>
    </ul>
  `,
})
export class ParentComponent {
  cityToSearch: string = '';
  studentName: string = '';
  updatedCollegeList: college[] = [];

  @ViewChild('collegeList') collegeList!: CollegeSearchComponent;

  searchCity(name: string, city: string) {
    this.studentName = name;
    this.cityToSearch = city;
    this.collegeList.searchCollege();
  }
}
