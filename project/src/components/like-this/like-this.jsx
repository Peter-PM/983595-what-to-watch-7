import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FilmList} from '../film-list/film-list.jsx';

function LikeThis(props) {
  const {similarFilms, filmId} = props;
  const films = similarFilms.filter((film) => film.id !== filmId).slice(0,4);
  return films.length ? (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        <FilmList
          films={films}
        />
      </div>
    </section>
  ) : (
    ''
  );
}

LikeThis.propTypes = {
  similarFilms: PropTypes.array.isRequired,
  filmId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  similarFilms: state.similarFilms,
});

export default connect(mapStateToProps, null)(LikeThis);
