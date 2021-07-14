import React from 'react';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import LikeThis from '../like-this/like-this';
import FilmTabs from './tabs.jsx';

function FilmPage(prop) {

  const history = useHistory();
  const film = prop.film;

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.previewImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          {Header(prop.authorization)}

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
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a
                  href={`/films/${film.id}/add-review`}
                  className="btn film-card__button"
                >
                  Add review
                </a>
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
        <LikeThis genre={film.genre} />
        {Footer()}
      </div>
    </>
  );
}

FilmPage.propTypes = {
  promoFilm: PropTypes.shape({
    authorization: PropTypes.bool.isRequired,
  }),
};

export default FilmPage;
