import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Person } from '../../classes/person';
import {FilterParameters} from '../../classes/filter-parameters';

@Injectable()
export class ProcessService {

  constructor(private http: HttpClient) { }

  process(parameters: FilterParameters) {

    let params = this.createQueryParams(parameters);

    const headers = new HttpHeaders().set("Access-Control-Allow-Origin", "*");

    return this.http.get<Person[]>('http://localhost:8080/XMLprocessor/data',
      { headers, params });

  }

  private createQueryParams(parameters: FilterParameters) {

    let params = new HttpParams();
    if (parameters.ordering == "Name") {
      params = params.set("ordering", "byName");
    } else {
      params = params.set("ordering", "byOccurrence");
    }
    params = params.set("prefix", parameters.prefix);

    return params;
  }
}
