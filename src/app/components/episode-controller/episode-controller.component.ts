import { Component, OnInit, Input, ContentChildren, QueryList, AfterViewInit, AfterContentInit } from '@angular/core';
import { EpisodeComponent } from '../episode/episode.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'episode-controller',
  templateUrl: './episode-controller.component.html',
  styleUrls: ['./episode-controller.component.scss']
})

export class EpisodeControllerComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(EpisodeComponent) tabs:  QueryList<EpisodeComponent>;


  constructor() { }


  ngOnInit() {}


  ngAfterContentInit() {
  }
  
  ngAfterViewInit() {

  }
}
