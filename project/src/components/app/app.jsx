import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';

function App({promoFilm}) {
  return (
    <Main promoFilm={promoFilm}/>
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    relise: PropTypes.number.isRequired,
  }),
};

export default App;
