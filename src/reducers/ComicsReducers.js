import { FETCH_COMICS, FETCH_COMIC } from '../actions/MarvelComics';

const INITIAL_STATE = { all: [], comic: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMICS:
      return { ...state, all: action.payload.data };
    case FETCH_COMIC:
      return { ...state, comic: action.payload.data };
    default:
      return state;
  }
}
