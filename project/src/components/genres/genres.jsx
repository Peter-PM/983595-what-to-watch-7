import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import { ALL_GENRE } from '../../const';

function Genres (props) {
  const {changeGenre, resetGenre, getFilmsByGenre, resetRenderFilms, films} = props;
  const activeGenre = props.genre;

  const allGenre = [];
  films.map((item) => allGenre.push(item.genre));
  const uniqGenre = [ALL_GENRE, ...new Set(allGenre)];


  return (
    <ul className="catalog__genres-list">
      {uniqGenre.map((genre, index) => (
        <li
          className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
          key={genre}
        >
          <Link
            to="#"
            className="catalog__genres-link"
            onClick={() => {
              genre === ALL_GENRE ? resetGenre() :  changeGenre(genre);
              genre === ALL_GENRE || getFilmsByGenre(genre);
              resetRenderFilms();
            }}
          >
            {genre}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  films: state.films,
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  resetGenre() {
    dispatch(ActionCreator.resetGenre());
  },
  getFilmsByGenre(genre) {
    dispatch(ActionCreator.getFilmsByGenre(genre));
  },
  resetRenderFilms() {
    dispatch(ActionCreator.resetFilmStep());
  },
});

Genres.propTypes = {
  changeGenre: PropTypes.func.isRequired,
  resetGenre: PropTypes.func.isRequired,
  getFilmsByGenre: PropTypes.func.isRequired,
  resetRenderFilms: PropTypes.func.isRequired,
  genre: PropTypes.string.isRequired,
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

export {Genres};
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
