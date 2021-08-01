import React, {useState, useEffect, useRef} from 'react';import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';
import { secondsToHms } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';

function Player(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoDuration, setDuration] = useState(0);
  const [barLength, setBarLength] = useState(0);

  const film = props.film;
  const history = useHistory();

  const videoRef = useRef();

  useEffect(() => {

    videoRef.current.onloadeddata = () => {
      setIsLoading(false);
      setDuration(videoRef.current.duration);
      setBarLength(videoRef.current.clientWidth);

      if (videoRef.current && videoRef.current.currentTime) {
        videoRef.current.ontimeupdate = () => setCurrentTime(videoRef.current.currentTime);
      }
    };
    videoRef.current.onplay = () => setIsPlaying(true);
    videoRef.current.onpause = () => setIsPlaying(false);

    return () => {
      if (videoRef.current) {
        videoRef.current.onloadeddata = null;
        videoRef.current.onplay = null;
        videoRef.current.onpause = null;
        videoRef.current.ontimeupdate = null;
        videoRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
  }, [isPlaying]);

  const media = document.querySelector('video');

  const toggleFullscreen = () => {

    if (!document.fullscreenElement) {
      media.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleClickExit = () => {
    videoRef.current.pause();
    history.push(`/films/${film.id}`);
  };

  return (
    <>
      {isLoading && <div style={{position: 'fixed', zIndex: 2}}><LoadingScreen/></div>}
      <div className="player">
        <video src={film.videoLink} className="player__video" poster={film.previewImage} autoPlay preload='metadata' ref={videoRef}></video>

        <button xlinkHref="/" type="button" className="player__exit" onClick={handleClickExit}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={100 * currentTime/videoDuration} max="100"></progress>
              <div className="player__toggler" style={{left: Math.floor(barLength * currentTime/videoDuration)}}>Toggler</div>
            </div>
            <div className="player__time-value">-{secondsToHms(videoDuration - currentTime)}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" disabled={isLoading} onClick={() => setIsPlaying(!isPlaying)}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{film.name}</div>

            <button type="button" className="player__full-screen" onClick={toggleFullscreen}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Player.propTypes = {
  film: PropTypes.shape({
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

export default Player;
