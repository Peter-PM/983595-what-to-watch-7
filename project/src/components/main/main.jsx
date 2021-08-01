import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Header from '../header/header.jsx';
import Genres from '../genres/genres.jsx';
import Footer from '../footer/footer';
import FilmList from '../film-list/film-list.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import { ActionCreator } from '../../store/action.js';
import { AuthorizationStatus, AppRoute } from '../../const.js';
import { fetchFavoriteStatus } from '../../store/api-actions.js';

function Main({promoFilm, films, getActiveFilm, authorizationStatus, changeFavoriteFlag}) {
  const {name, genre, released, previewImage, posterImage} = promoFilm;
  const history = useHistory();

  const handleClickPromo  = () => {
    history.push(`/player/${promoFilm.id}`);
    getActiveFilm(promoFilm);
  };

  const changeIsFavorite = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      changeFavoriteFlag(promoFilm.id, !promoFilm.isFavorite, true);
    } else {
      history.push(AppRoute.LOGIN);
    }
  };

  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src={previewImage}
            alt={name}
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header/>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src={posterImage}
                alt={name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={handleClickPromo}
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
                  {promoFilm.isFavorite && authorizationStatus === AuthorizationStatus.AUTH ? (
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres/>

          <div className="catalog__films-list">
            <FilmList films={films}/>
          </div>

          <div className="catalog__more">
            <ShowMoreButton/>
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  getActiveFilm: PropTypes.func.isRequired,
  changeFavoriteFlag: PropTypes.func.isRequired,
  promoFilm: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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

const mapDispatchToProps = (dispatch) => ({
  getActiveFilm(film) {
    dispatch(ActionCreator.getActiveFilm(film));
  },
  changeFavoriteFlag(id, flag, promo) {
    dispatch(fetchFavoriteStatus(id, flag, promo));
  },
});

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  promoFilm: state.promoFilm,
  films: state.films,
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
