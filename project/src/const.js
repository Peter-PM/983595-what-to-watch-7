export const AppRoute = {
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM_OVERVIEW: '/films/:id',
  FILM_DETAILS: '/films/:id/details',
  MAIN: '/',
  ADD_REVIEW: '/films/:id/review',
  PLAYER: '/player/:id',
  COMMENT_ERROR_SCREEN: '/error-comment',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  FILMS: '/films',
  FILM_ID: '/films/:id',
  SIMILAR_FILMS: '/films/:id/similar',
  PROMO_FILM: '/promo',
  MY_FILMS: '/favorite',
  FILM_COMMENTS: '/comments/:film_id',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const ALL_GENRE = 'All genre';

export const FILMS_PER_STEP = 8;
