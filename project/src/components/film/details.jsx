import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory, Link} from 'react-router-dom';
import Header from '../header/header.jsx';
import LikeThis from '../like-this/like-this';

function FilmDetails(prop) {

  const [activeTab, setActiveTab] = useState({
    tab: 'Overview',
  });

  const Tab = {
    OVERVIEW: 'Overview',
    DETAILS: 'Details',
    REVIEWS: 'Reviews',
  };

  const history = useHistory();
  const film = prop.film;
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.previewImage} alt={film.name}/>
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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <Link to={`/films/${film.id}`} className="film-nav__link" name={Tab.OVERVIEW}
                      onClick={(evt) => {
                        setActiveTab(() => ({
                          ...activeTab,
                          tab: evt.target.name,
                        }));
                      }}
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <Link to={`/films/${film.id}/details`} className="film-nav__link" name={Tab.DETAILS}
                      onClick={(evt) => {
                        setActiveTab(() => ({
                          ...activeTab,
                          tab: evt.target.name,
                        }));
                      }}
                    >
                      Details
                    </Link>
                  </li>
                  <li className="film-nav__item">
                    <Link to={`/films/${film.id}/review`} className="film-nav__link" name={Tab.REVIEWS}
                      onClick={(evt) => {
                        setActiveTab(() => ({
                          ...activeTab,
                          tab: evt.target.name,
                        }));
                      }}
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="film-card__text film-card__row">
                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Director</strong>
                    <span className="film-card__details-value">{film.director}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Starring</strong>
                    <span className="film-card__details-value">
                      {film.starring.join(', ')}
                    </span>
                  </p>
                </div>

                <div className="film-card__text-col">
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Run Time</strong>
                    <span className="film-card__details-value">{111}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Genre</strong>
                    <span className="film-card__details-value">{film.genre}</span>
                  </p>
                  <p className="film-card__details-item">
                    <strong className="film-card__details-name">Released</strong>
                    <span className="film-card__details-value">{film.released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {LikeThis()}
    </>
  );
}

FilmDetails.propTypes = {
  promoFilm: PropTypes.shape({
    authorization: PropTypes.bool.isRequired,
  }),
};

export default FilmDetails;
