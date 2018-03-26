import { Component, OnInit, QueryList } from '@angular/core';

/** REDUX */
import { NgRedux, select } from 'ng2-redux';
/** SERVICES */
import { TvShowService } from '../../services/tv-show.service';
/** RXJS */
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
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
 

  public loadingInfo = true;

  @select(['tvShow', 'Images','Background']) background$;
  @select(['tvShow', 'Title']) title$;
  @select(['tvShow', 'Genres']) genres$;
  @select(['tvShow', 'Year']) year$;
  @select(['tvShow', 'Cast']) cast$;
  @select(['tvShow', 'Seasons']) seasons$;
  @select(['tvShow', 'Synopsis']) synopsis$;


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
