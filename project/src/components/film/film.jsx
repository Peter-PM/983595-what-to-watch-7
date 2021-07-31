import React from 'react';
import PropTypes from 'prop-types';
import FilmPage from './film-page';
import { useHistory } from 'react-router';
import { AppRoute } from '../../const';

function Film(props) {
  const {film} = props;
  const history = useHistory();
  return film ? (
    <FilmPage film={film}/>
  ) : (
    <>
      {history.push(AppRoute.NOT_FOUND_SCREEN)}
    </>
  );
}

Film.propTypes = {
  film: PropTypes.object.isRequired,
};

export default Film;
