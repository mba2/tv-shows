import { Component, OnInit, ViewChildren, QueryList, ChangeDetectorRef, AfterViewInit, 
  ContentChildren, AfterContentInit, AfterContentChecked } from '@angular/core';

import { TabComponent } from './../tab/tab.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab-controller',
  templateUrl: './tab-controller.component.html',
  styleUrls: ['./tab-controller.component.scss']
})

export class TabControllerComponent implements OnInit, AfterContentInit, AfterViewInit {
  @ContentChildren(TabComponent) tabs:  QueryList<TabComponent>;

  constructor(private cdr: ChangeDetectorRef) { }

  toggleTab(tab: TabComponent): void {
    console.log(tab);
    console.log(this.tabs);
    this.tabs.forEach(e => e.isActive = false);
    tab.isActive = true;
  }

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
