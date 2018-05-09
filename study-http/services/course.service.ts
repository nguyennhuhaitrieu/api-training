import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Statics
import 'rxjs/add/observable/throw';

import { ICourse } from './../defines/course.interface';

@Injectable()
export class CourseService {
private apiUrl = 'http://586fc8ad0474f212000b02c5.mockapi.io/api/angular2/v2/courses/';  // URL to web API

constructor(private _httpService: Http){

}

getItems(): Observable<ICourse[]> {
  return this._httpService.get(this.apiUrl).map(this.extractData).catch(this.handleError);
}

private extractData(res: Response) {
  return res.json() || { };
}

private handleError (error: Response | any) {

  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }

  return Observable.throw(errMsg);
}
}
