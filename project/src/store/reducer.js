import {ActionType} from './action';
import films from '../mocks/films';
import { ALL_GENRE } from '../const';
import { FILMS_PER_STEP } from '../const';

const initialState = {
  genre: ALL_GENRE,
  films: films,
  filmsByGenre: films,
  filmsStartRender: 0,
  filmsStepRender:  FILMS_PER_STEP,
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
    case ActionType.RENDER_FILMS_PER_STEP:
      return {
        ...state,
        filmsStepRender: state.filmsStepRender + FILMS_PER_STEP,
      };
    case ActionType.RESET_FILM_STEP:
      return {
        ...state,
        filmsStepRender: FILMS_PER_STEP,
      };
    default:
      return state;
  }
};


export {reducer};
