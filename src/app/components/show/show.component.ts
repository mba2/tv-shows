import { Component, OnInit } from '@angular/core';

/** REDUX */
import { NgRedux } from 'ng2-redux';
/** SERVICES */
import { TvShowService } from '../../services/tv-show.service';
/** RXJS */
import 'rxjs/add/operator/toPromise';

/** STORES AND ACTIONS */
import { IAppState } from './../../store';
import { LOAD_SHOW_INFO } from './actions';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  private loadingInfo = true;

  constructor(
    private service: TvShowService, 
    private store: NgRedux<IAppState>) { }

  ngOnInit() {
    this.service.getInfo()
    .then( (info) => {
      this.loadingInfo = false;
      this.store.dispatch({ type: LOAD_SHOW_INFO , info });
    });
  }

}
