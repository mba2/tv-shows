/** PREVENTION TO OBJECT MUTATION */
import { tassign } from 'tassign';
/** ACTIONS */
import { LOAD_SHOW_INFO } from './actions';


export interface IShowState {
  Cast: any[];
  Genres: any[];
  ID: string;
  Images: any;
  Synopsis: string;
  Title: string;
  Year: number;
  Seasons: any[];
  Episodes: any[];
}

class ShowActions {
  constructor(
    private state: IShowState,
    private action: any) {}
    
  /**
   * @param episodes: array
  */
  removeNullEpisodes(episodes): void {
    return episodes.filter(episode => episode);
  }

  /**
   * 
   * @param existingSeasons: array 
   * @param episode: object
   */
  addEpisodesToSeason(existingSeasons, episode) {
    /** CHECK IF THE EPISODE'S SEASON ALREADY EXISTS */
    const lookedSeasonId = existingSeasons.findIndex((item) => {
      return item.id === episode.SeasonNumber;
    });
    /** IF IT DOES... GO INTO THE SEASONS' ARRAY...AND INSERT THE EPISODE INTO IT */
    if (lookedSeasonId >= 0) {
      existingSeasons[lookedSeasonId]['eps'].push(episode);
    } else {
    /** OTHERWISE... CREATE A NEW SEASON OBJECT, SET ITS FIRST EPISODE AND INSERT IT INTO THE SEASONS' ARRAY*/
      existingSeasons.push({
        id : episode.SeasonNumber,
        eps : [episode]
      });
    }
  }

  loadShowInfo(): IShowState {
    const [showInfo] = this.action.info;
    let Episodes = this.action.info[1];
    const {Cast, Genres, ID, Images, Synopsis, Title, Year} = showInfo;
    const Seasons = [];

    /** REMOVE NULL EPISODE FROM THE RETURNED JSON */
    Episodes = this.removeNullEpisodes(Episodes);
    /** INSERT EPISODES INTO THEIR SEASONS */
    Episodes.map( episode => {
      if (episode) { this.addEpisodesToSeason(Seasons, episode); }
    });

    return tassign(
      this.state,
      {
        Cast, Genres, ID, Images, Synopsis, Title, Year, Seasons, Episodes
      }
    );
  }
}

export function tvShowReducer(state: IShowState = null, action): IShowState {
  const actions = new ShowActions(state, action);

  switch (action.type) {
    case LOAD_SHOW_INFO:
      return actions.loadShowInfo();
    default:
      return state;
  }
}
