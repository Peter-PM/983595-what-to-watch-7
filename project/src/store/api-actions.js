import {ActionCreator} from './action';
import {AuthorizationStatus, APIRoute} from '../const';
import {adaptFilmToClient, adaptUserToClient} from '../services/adapter';

export const fetchFilmList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => {
      const films = data.map((item) => adaptFilmToClient(item));
      dispatch(ActionCreator.getFilms(films));
    })
);

export const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO_FILM)
    .then(({data}) => dispatch(ActionCreator.getActiveFilm(adaptFilmToClient(data))))
);

export const fetchFilm = (id) => (dispatch, _getState, api) => {
  const url = `/films/${id}`;
  return api.get(url)
    .then(({data}) => dispatch(ActionCreator.getActiveFilm(adaptFilmToClient(data))))
    .then(() => dispatch(ActionCreator.redirectToFilm(url)));
};

export const fetchComments = (url) => (dispatch, _getState, api) => (
  api.get(url)
    .then((comments) => dispatch(ActionCreator.getComments(comments.data)))
);

export const fetchFavoriteFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.MY_FILMS)
    .then(({data}) => {
      const films = data && data.map((item) => adaptFilmToClient(item));
      dispatch(ActionCreator.getFavoriteFilms(films));
    })
);

export const fetchFavoriteStatus = (id, flag) => (dispatch, _getState, api) => {
  const status = flag ? 1 : 0;
  const url = `/favorite/${id}/${status}`;
  api.post(url)
    .then(({data}) => dispatch(ActionCreator.getActiveFilm(adaptFilmToClient(data))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.loadUserInfo(adaptUserToClient(response.data)));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.loadUserInfo(adaptUserToClient(data)));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .then(() => dispatch(ActionCreator.deleteUserInfo()))
);

