export const ActionType = {
  CHANGE_GENRE: 'change-genre',
  FILMS_BY_GENRE: 'films-by-genre',
  RESET_GENRE: 'reset-genre',
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
};
