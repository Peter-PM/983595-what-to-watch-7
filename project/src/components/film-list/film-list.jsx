import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FilmCard from '../film-card/film-card';


function FilmList(props) {

  const films = props.films;

  return (
    <>
      {films.map((film) => (
        <article className="small-film-card catalog__films-card"  key={film.id}>
          <FilmCard film={film}/>
        </article>
      ))}
    </>
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


const mapStateToProps = (state) => ({
  films: state.filmsByGenre,
});

// const mapDispatchToProps = (dispatch) => ({
//   changeGenre(genre) {
//     dispatch(ActionCreator.changeGenre(genre));
//   },
//   resetGenre() {
//     dispatch(ActionCreator.resetGenre());
//   },
// });

export {FilmList};
export default connect(mapStateToProps, null)(FilmList);
