import { combineReducers } from 'redux';
import ComicsReducer from './ComicsReducers';
import CharactersReducer from './CharactersReducer';
// import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  comics: ComicsReducer,
  characters: CharactersReducer
});
// form: formReducer

export default rootReducer;
