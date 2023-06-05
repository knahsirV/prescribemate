import { Component, OnInit } from '@angular/core';
import { OvercounterService } from 'src/app/overcounter.service';


@Component({
  selector: 'app-fda-drug-info',
  templateUrl: './fda-drug-info.component.html',
  styleUrls: ['./fda-drug-info.component.scss']
})
export class FdaDrugInfoComponent implements OnInit {

  constructor(private overcounterService: OvercounterService) { }

  oMeds: Array<any>;

  ngOnInit() {
    this.overcounterService.fetchPresMeds().subscribe(data => this.oMeds = data['results']);
  }

}
