import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor() { }

  prescribedMeds = [
    {
      name: 'Propranolol 20mg Tab',
      expire: '01 October 2020'
    },
    {
      name: 'Simvastatin 40mg Tab',
      expire: '22 November 2020'
    },
    {
      name: 'Citaloptam 20mg Tab',
      expire: '02 December 2020'
    },
  ];

  oldMeds = [
    {
      name: 'Simvastatin 40mg Tab',
      expire: '22 February 2020'
    },
    {
      name: 'Citaloptam 20mg Tab',
      expire: '02 May 2020'
    },
  ];

  ngOnInit() {
  }


}
