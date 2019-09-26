/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormResponse} from './interfaces/form-response';
import {of} from 'rxjs';
import data from './mock.data.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getQuestions() {
    return of(data.questions);
  }
  getNaicsCodes(query:string) {
    console.log(data.search);
    return of(data.search[0]);
  }
  saveForm(formObject: {responses: FormResponse[]}) {
    return of({
      success: true
    })
  }
}
/* tslint:enable */
