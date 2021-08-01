import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function ShowMoreButton(props) {
  const { filmsByGenre, filmsStepRender, renderFilms } = props;

  return filmsByGenre.length > filmsStepRender ? (
    <button
      className="catalog__button"
      type="button"
      onClick={() => renderFilms()}
    >
      Show more
    </button>
  ) : (
    ''
  );
}

const mapStateToProps = (state) => ({
  filmsStepRender: state.filmsStepRender,
  filmsByGenre: state.filmsByGenre,
});

const mapDispatchToProps = (dispatch) => ({
  renderFilms() {
    dispatch(ActionCreator.renderFilmsPerStep());
  },
});

ShowMoreButton.propTypes = {
  renderFilms:PropTypes.func.isRequired,
  filmsStepRender: PropTypes.number.isRequired,
  filmsByGenre: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    posterImage: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    videoLink: PropTypes.string.isRequired,
    previewVideoLink: PropTypes.string.isRequired,
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

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
