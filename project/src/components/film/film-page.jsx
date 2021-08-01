import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useHistory, Link} from 'react-router-dom';
import { AuthorizationStatus } from '../../const.js';
import { AppRoute } from '../../const.js';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import LikeThis from '../like-this/like-this';
import FilmTabs from './tabs.jsx';
import { ActionCreator } from '../../store/action.js';
import { adaptFilmToClient } from '../../services/adapter.js';
import { fetchComments, fetchFavoriteStatus} from '../../store/api-actions.js';

function FilmPage(props) {

  const history = useHistory();
  const {filmFromState, authorizationStatus, getSimilarFilms, getComments, changeFavoriteFlag} = props;
  const film = filmFromState ? filmFromState : props.filmFromUrl;

  React.useEffect(() => {
    fetch(`https://7.react.pages.academy/wtw/films/${film.id}/similar`)
      .then((response) => response.json())
      .then((films) => {
        getSimilarFilms(films.map((item) => adaptFilmToClient(item)));
      });
  });

  React.useEffect(() => {
    getComments(`https://7.react.pages.academy/wtw/comments/${film.id}`);
  });

  const changeIsFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      changeFavoriteFlag(film.id, !film.isFavorite);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.previewImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => history.push(`/player/${film.id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={changeIsFavorite}
                >
                  {film.isFavorite ? (
                    <svg viewBox="0 0 18 14" width="18" height="14">
                      <use xlinkHref="#in-list"></use>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                  )}
                  <span>My list</span>
                </button>
                {authorizationStatus === AuthorizationStatus.AUTH ? (
                  <Link
                    to={`/films/${film.id}/add-review`}
                    className="btn film-card__button"
                  >
                    Add review
                  </Link>
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={film.posterImage}
                alt={`${film.name} poster`}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <FilmTabs film={film} />
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <LikeThis
          filmId={film.id}
        />
        <Footer />
      </div>
    </>
  );
}

FilmPage.propTypes = {
  changeFavoriteFlag: PropTypes.func.isRequired,
  getSimilarFilms: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  filmFromUrl: PropTypes.object.isRequired,
  filmFromState: PropTypes.shape({
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
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getSimilarFilms(films) {
    dispatch(ActionCreator.getSimilarFilms(films));
  },
  getComments(url) {
    dispatch(fetchComments(url));
  },
  changeFavoriteFlag(id, flag) {
    dispatch(fetchFavoriteStatus(id, flag));
  },
});

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  filmFromState: state.activeFilm,
});

export {FilmPage};
export default connect(mapStateToProps, mapDispatchToProps)(FilmPage);
