import { Component, OnInit } from '@angular/core';
import { OvercounterService } from 'src/app/overcounter.service';

@Component({
  selector: 'app-off-counter',
  templateUrl: './off-counter.component.html',
  styleUrls: ['./off-counter.component.scss']
})
export class OffCounterComponent implements OnInit {

  constructor(private overcounterService: OvercounterService) { }

  oMeds: Array<any>;

  ngOnInit() {
    this.overcounterService.fetchMeds().subscribe(data => this.oMeds = data['results']);
  }


}
