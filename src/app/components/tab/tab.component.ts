import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {
  @Input('data') data;
  @Input('title') title;
  @Input('content') content;

  @Input('isActive') isActive = false;

  constructor() { }

  ngOnInit() {
  }

}
