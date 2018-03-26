import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  @Input('episodeData') episodeData;
  @Input('isActive') isActive = false;
  @Output() toggle = new EventEmitter();

  constructor() { }

  onClick() {
    this.isActive = !this.isActive;
    this.toggle.emit(this);
  }

  ngOnInit() {
  }

}
