import { Component } from '@angular/core';

/** REDUX */
import { select, NgRedux } from 'ng2-redux';
/** STORE(S) */
import { IAppState } from './store';
import { CHANGE_TITLE, INCREMENT } from './components/placeholder/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @select( s => s.placeholder.title) placeholderTitle;
  @select( s => s.placeholder.counter) placeholderCounter;

  constructor(private ngRedux: NgRedux<IAppState>) {
    
  }
  changeTitle(title: string) {
    this.ngRedux.dispatch( { type: CHANGE_TITLE, title });
  }

  increment() {
    this.ngRedux.dispatch( { type: INCREMENT });
  }

}
