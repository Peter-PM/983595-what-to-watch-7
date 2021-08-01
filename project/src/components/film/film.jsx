import React from 'react';
import PropTypes from 'prop-types';
import FilmPage from './film-page';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function Film(props) {

  if (!props.filmFromUrl) {
    return <NotFoundScreen/>;
  }

  return  <FilmPage filmFromUrl={props.filmFromUrl}/>;
}

Film.propTypes = {
  filmFromUrl: PropTypes.object.isRequired,
};

export default Film;
