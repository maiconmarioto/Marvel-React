import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import ComicsIndex from './containers/ComicsIndex';
import ComicsDetail from './containers/ComicsDetail';
import CharactersIndex from './containers/CharactersIndex';
import CharactersDetail from './containers/CharactersDetail';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CharactersIndex} />
    <Route path="comics" component={ComicsIndex}/>
    <Route path="comic/:id" component={ComicsDetail}/>
    <Route path="characters" component={CharactersIndex}/>
    <Route path="character/:charId" component={CharactersDetail}/>
  </Route>
);
