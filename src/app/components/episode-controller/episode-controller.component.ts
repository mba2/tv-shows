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

  // toggleTab(tab: EpisodeControllerComponent): void {
  //   console.log(tab);
  //   console.log(this.tabs);
  //   this.tabs.forEach(e => e.isActive = false);
  //   tab.isActive = true;
  // }

  ngOnInit() {}


  ngAfterContentInit() {
    // this.tabs.changes.subscribe( () => {
    //   this.tabs.first.isActive = true;
    //   // this.cdr.detectChanges();
    // });
  }
  
  ngAfterViewInit() {

  }
}
