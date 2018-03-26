import { Component, OnInit, Input, ContentChildren, AfterViewInit, QueryList, ViewChildren, ChangeDetectorRef } from '@angular/core';

import { TabComponent } from '../tab/tab.component';
import { select } from 'ng2-redux';

import 'rxjs/add/operator/take';
import 'rxjs/add/operator/first';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit, AfterViewInit {

  @select(['tvShow', 'Seasons']) seasons$;

  @ViewChildren(TabComponent) tabs:  QueryList<TabComponent>;

  constructor(private cdr: ChangeDetectorRef) { }

  toggleTab(tab: TabComponent): void {
    tab.isActive = !tab.isActive;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.tabs.changes.subscribe( () => {
      this.tabs.first.isActive = true;
      this.cdr.detectChanges();
    });
  }
  
}
