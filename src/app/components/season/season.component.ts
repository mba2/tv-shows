import { Component, OnInit, Input, QueryList, ViewChildren } from '@angular/core';

import { EpisodeComponent } from './../../components/episode/episode.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {
  @Input('seasonData') seasonData;
  @ViewChildren(EpisodeComponent) episodes:  QueryList<EpisodeComponent>;
  
  constructor() { }

  toggleEpisode(episode) {
    this.episodes.forEach(e => {
      if (e !== episode) { e.isActive = false; }
    });
  }

  ngOnInit() {
  };

}
