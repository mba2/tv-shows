/** PREVENTION TO OBJECT MUTATION */
import { tassign } from 'tassign'; 
/** ACTIONS */
import { LOAD_SHOW_INFO } from './actions';


export interface IPlaceholderState {
  counter: number;
  title: string;
  items: any[];
}

export const PLACEHOLDER_INIT_STATE: IPlaceholderState = {
  counter: 0,
  title: 'Placeholder Title',
  items: ['Placeholder Item 1', 'Placeholder Item 2']
}

export function placeholderReducer( 
  state: IPlaceholderState = PLACEHOLDER_INIT_STATE, 
  action): IPlaceholderState 
  {
    
  let actions = new PlaceholderActions(state, action);
  switch(action.type) {
    case LOAD_SHOW_INFO:
      return actions.loadShowInfo();
    return state;
}
 

class PlaceholderActions {
  constructor( 
    private state: IPlaceholderState, 
    private action: any) 
  {}

  loadShowInfo() {
    console.log(this.action);
    return tassign(
      this.state,
      {
        title : this.action.title
      }
    ) 
  };
}
  


