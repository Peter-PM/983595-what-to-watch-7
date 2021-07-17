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
  getFilmsByGenre: () => ({
    type: ActionType.FILMS_BY_GENRE,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
};
