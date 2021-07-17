import {ActionType} from './action';
import films from '../mocks/films';
import { ALL_GENRE } from '../const';

const initialState = {
  genre: ALL_GENRE,
  films: films,
  filmsByGenre: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.FILMS_BY_GENRE:
      return {
        ...state,
        filmsByGenre: initialState.films.filter((film) => film.genre === action.payload),
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        genre: ALL_GENRE,
        filmsByGenre: initialState.films,
      };
    default:
      return state;
  }
};


export {reducer};
