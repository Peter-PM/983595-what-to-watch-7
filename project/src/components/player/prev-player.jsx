import React, { useEffect, useRef} from 'react';import PropTypes from 'prop-types';


function PrevPlayer(film, isPlaying) {

  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.onplay = () => isPlaying;
    videoRef.current.onpause = () => isPlaying;

    return () => {
      if (videoRef.current) {
        videoRef.current.onplay = null;
        videoRef.current.onpause = null;
        videoRef.current = null;
      }
    };
  }, [film.videoLink]);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isPlaying]);
  return (
    <video
      src={film.previewVideolink}
      className="player__video"
      poster={film.previewImage}
      muted
      ref={videoRef}
    >
    </video>
  );
}

PrevPlayer.propTypes = {
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

export default PrevPlayer;
