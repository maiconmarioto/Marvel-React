import { FETCH_CHARACTERS, FETCH_CHARACTER, FETCH_CHAR_BY_NAME } from '../actions/MarvelComics';

const INITIAL_STATE = { all: [], character: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return { ...state, all: action.payload.data };
      case FETCH_CHARACTER:
        return { ...state, character: action.payload.data };
      case FETCH_CHAR_BY_NAME:
        return { ...state, all: action.payload.data };
    default:
      return state;
  }
}
