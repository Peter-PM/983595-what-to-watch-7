import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { getTimeAdapter } from '../../utils/utils.js';
import Comments from './comments.jsx';
import { formatFilmRating } from '../../utils/utils.js';

function FilmTabs(props) {
  const [activeTab, setActiveTab] = useState({
    tab: 'Overview',
  });

  const Tab = {
    OVERVIEW: 'Overview',
    DETAILS: 'Details',
    REVIEWS: 'Reviews',
  };
  const film = props.film;

  const renderDetails = () => (
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
          <span className="film-card__details-value">
            {getTimeAdapter(film.runTime)}
          </span>
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
  );
  const renderReviews = () => (
    <Comments/>
  );
  const renderOverview = () => (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{formatFilmRating(film.rating)}</span>
          <span className="film-rating__count">{film.scoreCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>Starring: {film.starring.join(', ')} and other</strong>
        </p>
      </div>
    </>
  );
  const renderTab = (hocks) => {
    switch (hocks) {
      case Tab.DETAILS:
        return renderDetails();
      case Tab.REVIEWS:
        return renderReviews();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab.tab === Tab.OVERVIEW && 'film-nav__item--active'}`}>
            <Link
              to='#'
              className="film-nav__link"
              name={Tab.OVERVIEW}
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
          <li className={`film-nav__item ${activeTab.tab === Tab.DETAILS && 'film-nav__item--active'}`}>
            <Link
              to='#'
              className="film-nav__link"
              name={Tab.DETAILS}
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
          <li className={`film-nav__item ${activeTab.tab === Tab.REVIEWS && 'film-nav__item--active'}`}>
            <Link
              to='#'
              className="film-nav__link"
              name={Tab.REVIEWS}
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

      {renderTab(activeTab.tab)}
    </div>
  );
}

FilmTabs.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
};

export default FilmTabs;
