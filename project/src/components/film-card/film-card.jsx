import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import PrevPlayer from '../player/prev-player';

function FilmCard(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0);
  const changeIsPlaying = () => setIsPlaying(true);
  const film = props.film;

  const history = useHistory();
  return (
    <>
      <div
        className="small-film-card__image"
        onMouseEnter={() => setIndex(setTimeout(changeIsPlaying, 1000))}
        onMouseLeave={() => {
          clearTimeout(index);
          setIsPlaying(false);
        }}
        onClick={() => history.push(`/films/${film.id}`)}
      >
        {PrevPlayer(film, isPlaying)}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href={`/films/${film.id}`}>
          {film.name}
        </a>
      </h3>
    </>
  );
}

FilmCard.propTypes = {
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

export default FilmCard;
