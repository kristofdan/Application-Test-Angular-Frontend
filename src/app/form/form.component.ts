import { Component, EventEmitter, Output } from '@angular/core';
import { FilterParameters } from '../../shared/classes/filter-parameters';

@Component({
  selector: 'filtering-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {

  requiredPrefix: string = "";
  ordering: string = "Name";
  submittedText: string;

  @Output() onSubmitted = new EventEmitter<FilterParameters>();

  onSubmit() {
    const parameters = new FilterParameters(this.ordering, this.requiredPrefix);
    this.onSubmitted.emit(parameters);
  }

}
