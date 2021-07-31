export const ActionType = {
  CHANGE_GENRE: 'change-genre',
  FILMS_BY_GENRE: 'films-by-genre',
  RESET_GENRE: 'reset-genre',
  RENDER_FILMS_PER_STEP: 'render-films-per-step',
  RESET_FILM_STEP: 'reset-film-step',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  LOAD_FILMS: 'load-films',
  LOAD_PROMO: 'load-promo-film',
  LOAD_ACTIVE_FILM: 'load-active-film',
  REDIRECT_TO_FILM: 'redirect-to-film',
  LOAD_FAVORITE_FILMS: 'load-favorite-films',
  USER_INFO: 'load-user-info',
  DELETE_USER_INFO: 'delete-user-info',
  LOAD_SIMILAR_FILMS: 'load-similar-films',
  LOAD_COMMENTS: 'load-comments',
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  getFilmsByGenre: (genre) => ({
    type: ActionType.FILMS_BY_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  renderFilmsPerStep: () => ({
    type: ActionType.RENDER_FILMS_PER_STEP,
  }),
  resetFilmStep: () => ({
    type: ActionType.RESET_FILM_STEP,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  getFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  getPromoFilms: (films) => ({
    type: ActionType.LOAD_PROMO,
    payload: films,
  }),
  getActiveFilms: (film) => ({
    type: ActionType.LOAD_ACTIVE_FILM,
    payload: film,
  }),
  redirectToFilm: (url) => ({
    type: ActionType.REDIRECT_TO_FILM,
    payload: url,
  }),
  loadUserInfo: (info) => ({
    type: ActionType.USER_INFO,
    payload: info,
  }),
  deleteUserInfo: () => ({
    type: ActionType.DELETE_USER_INFO,
  }),
  getFavoriteFilms: (films) => ({
    type: ActionType.LOAD_FAVORITE_FILMS,
    payload: films,
  }),
  getSimilarFilms: (films) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: films,
  }),
  getComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};
