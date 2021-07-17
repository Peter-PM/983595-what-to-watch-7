import React from 'react';
import PropTypes from 'prop-types';
import films from '../../mocks/films.js';
import {FilmList} from '../film-list/film-list.jsx';

function LikeThis(props) {
  const genre = props.genre;
  const likeFilms = films.filter((film) => film.genre === genre).slice(0, 4);
  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        <FilmList
          films={likeFilms}
        />
      </div>
    </section>
  );
}
LikeThis.propTypes = {
  genre: PropTypes.string.isRequired,
};
export default LikeThis;
