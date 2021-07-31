import {ActionType} from './action';
import { ALL_GENRE } from '../const';
import { FILMS_PER_STEP, AuthorizationStatus} from '../const';

const initialState = {
  genre: ALL_GENRE,
  films: [],
  promoFilm: {},
  filmsByGenre: [],
  filmsStartRender: 0,
  filmsStepRender: FILMS_PER_STEP,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  user: {},
  favoriteFilms: {},
  similarFilms: [],
  comments: [],
  activeFilm: {},
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
        filmsByGenre: state.films.filter((film) => film.genre === action.payload),
      };
    case ActionType.RESET_GENRE:
      return {
        ...state,
        genre: ALL_GENRE,
        filmsByGenre: state.films,
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        filmsByGenre: action.payload,
        isDataLoaded: true,
      };
    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promoFilm: action.payload,
      };
    case ActionType.USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    case ActionType.DELETE_USER_INFO:
      return {
        ...state,
        user: {},
      };
    case ActionType.LOAD_FAVORITE_FILMS:
      return {
        ...state,
        favoriteFilms: action.payload,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case ActionType.LOAD_ACTIVE_FILM:
      return {
        ...state,
        activeFilm: action.payload,
      };
    default:
      return state;
  }
};


export {reducer};
