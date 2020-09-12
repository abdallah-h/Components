import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent implements OnInit {
  classNames = 'striped celled';

  data = [
    { name: 'Abdallah', age: 24, job: 'Developer', employed: true },
    { name: 'Hassan', age: 25, job: 'Developer', employed: false },
    { name: 'Abdulmenam', age: 26, job: 'Developer', employed: true },
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Employed' },
  ];

  constructor() {}

  ngOnInit() {}
}
