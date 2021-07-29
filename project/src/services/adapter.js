
export const adaptToClient = (film) => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      videoLink: film.video_link,
      previewVideolink: film.preview_video_link,
      scoreCount: film.scores_count,
      runTime: film.run_time,
      isFavorite: film.is_favorite,
    },
  );

  delete adaptedFilm.poster_image;
  delete adaptedFilm.preview_image;
  delete adaptedFilm.background_image;
  delete adaptedFilm.background_color;
  delete adaptedFilm.video_link;
  delete adaptedFilm.preview_video_link;
  delete adaptedFilm.scores_count;
  delete adaptedFilm.run_time;
  delete adaptedFilm.is_favorite;

  return adaptedFilm;
};

export const adaptToServer = (film) => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      'id': film.id,
      'comments': film.comments,
      'film_info': {
        'title': film.title,
        'alternative_title': film.originalTitle,
        'total_rating': film.rating,
        'poster': film.poster,
        'age_rating': film.ageRating,
        'director': film.director,
        'writers': film.writers,
        'actors': film.actors,
        'release': {
          'date': film.reliseDate,
          'release_country': film.country,
        },
        'runtime': film.duration,
        'genre': film.genre,
        'description': film.description,
      },
      'user_details': {
        'watchlist': film.isWatchlist,
        'already_watched': film.isWatched,
        'watching_date': film.watchedDate,
        'favorite': film.isFavorite,
      },
    },
  );

  delete adaptedFilm.poster;
  delete adaptedFilm.title;
  delete adaptedFilm.originalTitle;
  delete adaptedFilm.rating;
  delete adaptedFilm.director;
  delete adaptedFilm.writers;
  delete adaptedFilm.actors;
  delete adaptedFilm.reliseDate;
  delete adaptedFilm.duration;
  delete adaptedFilm.country;
  delete adaptedFilm.genre;
  delete adaptedFilm.description;
  delete adaptedFilm.ageRating;
  delete adaptedFilm.isWatchlist;
  delete adaptedFilm.isWatched;
  delete adaptedFilm.isFavorite;
  delete adaptedFilm.watchedDate;
  delete adaptedFilm.localDescription;
  delete adaptedFilm.localEmotion;
  delete adaptedFilm.localComments;
  delete adaptedFilm.isDisabled;

  return adaptedFilm;
};
