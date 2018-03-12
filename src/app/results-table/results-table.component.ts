import { Component } from '@angular/core';

import { Person } from '../../shared/classes/person';
import { FilterParameters } from '../../shared/classes/filter-parameters';
import { ProcessService } from '../../shared/services/process/process.service';

@Component({
  selector: 'results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.css'],
  providers: [ ProcessService ]
})

export class ResultsTableComponent {

  result: Person[];

  constructor(private processService: ProcessService) { }

  sendRequest(parameters: FilterParameters) {
    this.processService.process(parameters)
      .subscribe( data => {
        this.result = data;
      });
  }

}
