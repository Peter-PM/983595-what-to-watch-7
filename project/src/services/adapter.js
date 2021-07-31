export const adaptFilmToClient = (film) => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      posterImage: film.poster_image,
      previewImage: film.preview_image,
      backgroundImage: film.background_image,
      backgroundColor: film.background_color,
      videoLink: film.video_link,
      previewVideoLink: film.preview_video_link,
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

export const adaptFilmToServer = (film) => {
  const adaptedFilm = Object.assign(
    {},
    film,
    {
      'id': film.id,
      'name': film.name,
      'poster_image': film.posterImage,
      'preview_image': film.previewImage,
      'background_image': film.backgroundImage,
      'background_color': film.backgroundColor,
      'video_link': film.videoLink,
      'preview_video_link': film.previewVideoLink,
      'description': film.description,
      'rating': film.rating,
      'scores_count': film.scoreCount,
      'director': film.director,
      'starring': film.starring,
      'run_time': film.runTime,
      'genre': film.genre,
      'released': film.released,
      'is_favorite': film.isFavorite,
    },
  );

  delete adaptedFilm.posterImage;
  delete adaptedFilm.previewImage;
  delete adaptedFilm.backgroundImage;
  delete adaptedFilm.backgroundColor;
  delete adaptedFilm.videoLink;
  delete adaptedFilm.previewVideoLink;
  delete adaptedFilm.scoreCount;
  delete adaptedFilm.runTime;
  delete adaptedFilm.isFavorite;

  return adaptedFilm;
};

export const adaptUserToClient = (data) => {
  const adaptedFilm = Object.assign(
    {},
    data,
    {
      id: data.id,
      email: data.email,
      name: data.name,
      avatarUrl: data.avatar_url,
      token: data.token,
    },
  );

  delete adaptedFilm.avatar_url;

  return adaptedFilm;
};
