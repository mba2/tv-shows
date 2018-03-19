import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';


@Injectable()
export class TvShowService {

  private urlShow = 'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json';
  private urlSeasons = 'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json';

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get(this.urlShow)
    .map(response => response)
    .delay(2500)
    .toPromise()
    .catch();
  }
}
