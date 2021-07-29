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
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  getPromoFilms: (films) => ({
    type: ActionType.LOAD_PROMO,
    payload: films,
  }),
};
