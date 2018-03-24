import { tassign } from 'tassign';
import { combineReducers } from 'redux';

/** ANY OTHER STORE GOES HERE */
import { tvShowReducer, IShowState } from './components/show/store';

export interface IAppState {
  tvShow: IShowState;
}

export const INITIAL_STATE = {
  tvShow: null,
};

export const rootReducer = combineReducers<IAppState>({
  tvShow: tvShowReducer,
});
