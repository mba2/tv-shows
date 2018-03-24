import { Component, OnInit } from '@angular/core';

/** SERVICES */
import { TvShowService } from '../../services/tv-show.service';

import 'rxjs/add/operator/toPromise';
// import { toPromise } from 'rxjs/operators';

@Component({
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  private showInfo: any;

  private loadingInfo = true;

  constructor(private service: TvShowService) { }

  ngOnInit() {
    this.service.getInfo()
    .then( (info) => {
      this.showInfo = info;
      // this.loadingInfo = false;
    });
  }

}
