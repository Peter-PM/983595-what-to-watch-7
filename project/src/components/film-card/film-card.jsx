import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PrevPlayer from '../player/prev-player';
import { fetchFilm } from '../../store/api-actions';

function FilmCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const changeIsPlaying = () => setIsPlaying(true);
  const film = props.film;
  const {getActiveFilm} = props;

  const handleFilmClick = (evt) => {
    evt.preventDefault();
    getActiveFilm(`/films/${film.id}`);
  };

  return (
    <>
      <div
        className="small-film-card__image"
        onMouseEnter={() => setIndex(setTimeout(changeIsPlaying, 1000))}
        onMouseLeave={() => {
          clearTimeout(index);
          setIsPlaying(false);
        }}
        onClick={handleFilmClick}
      >
        {PrevPlayer(film, isPlaying)}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`/films/${film.id}`} onClick={handleFilmClick}>
          {film.name}
        </Link>
      </h3>
    </>
  );
}

FilmCard.propTypes = {
  getActiveFilm: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm(url) {
    dispatch(fetchFilm(url));
  },
});

export {FilmCard};
export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
