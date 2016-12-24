import _ from 'lodash';
import axios from 'axios';
import { ROOT_URL, API_KEY } from '../helpers/MarvelConfig';

export const FETCH_COMICS = 'FETCH_COMICS';
export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_COMIC = 'FETCH_COMIC';
export const FETCH_CHARACTER = 'FETCH_CHARACTER';

const offsetComics = _.random(0, 38545);
const offsetCharacters = _.random(0, 1465);

export function fetchComics() {
  const request = axios.get(`${ROOT_URL}/comics?${API_KEY}&offset=${offsetComics}`);

  return {
    type: FETCH_COMICS,
    payload: request
  };
}

export function fetchComic(id) {
  const request = axios.get(`${ROOT_URL}/comics/${id}?${API_KEY}`);

  return {
    type: FETCH_COMIC,
    payload: request
  };
}

export function fetchCharacters() {
  const request = axios.get(`${ROOT_URL}/characters?${API_KEY}&offset=${offsetCharacters}`);

  return {
    type: FETCH_CHARACTERS,
    payload: request
  };
}

export function fetchCharacter(charId) {
  console.log('ID: ', charId);
  const request = axios.get(`${ROOT_URL}/characters/${charId}?${API_KEY}`);

  return {
    type: FETCH_CHARACTER,
    payload: request
  };
}
