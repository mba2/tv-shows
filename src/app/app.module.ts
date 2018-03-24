import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

/** REDUX */
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux';
import { combineReducers } from 'redux';
import { IAppState, rootReducer, INITIAL_STATE } from './store';

/** SERVICES */
import { TvShowService } from './services/tv-show.service';


/** COMPONENTS */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ShowComponent } from './components/show/show.component';
import { LoaderDonutComponent } from './components/loader-donut/loader-donut.component';

import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { AnotherPlaceholderComponent } from './components/another-placeholder/another-placeholder.component';
import { LoaderTvShowComponent } from './components/loader-tv-show/loader-tv-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowComponent,
    LoaderDonutComponent,
    PlaceholderComponent,
    AnotherPlaceholderComponent,
    LoaderTvShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'show', component: ShowComponent }
    ])
  ],
  providers: [
    TvShowService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    const enhancers = isDevMode() ? [devTools.enhancer()] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [], enhancers);
  }
 }
