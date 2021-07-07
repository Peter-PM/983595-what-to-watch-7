import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card';


function FilmList(props) {
  const activeFilm = useState({
    film: 0,
  });
  const SetId = activeFilm[1];
  const films = props.films;

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <article className="small-film-card catalog__films-card"  key={film.id} onMouseOver={() => {
          SetId((prevCounter) => ({
            ...prevCounter,
            film: film,
          }));
        }}
        >
          <FilmCard film={film}/>
        </article>
      ))}
    </div>
  );
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideolink: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    scoreCount: PropTypes.number.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(
      PropTypes.string.isRequired,
    ).isRequired,
    runTime: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  })).isRequired,
};

export default FilmList;
