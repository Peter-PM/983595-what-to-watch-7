import {ActionType} from './action';
import films from '../mocks/films';

const initialState = {
  genre: 'all-genre',
  films: films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload,
      };
    case ActionType.FILTER_FILMS_BY_GENRE:
      return {
        ...state,
        films: films.filter((film) => film.genre === action.payload),
      };
    default:
      return state;
  }
};


export {reducer};
