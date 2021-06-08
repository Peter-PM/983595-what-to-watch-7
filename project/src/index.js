import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  relise: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      {...promoFilm}
    />
  </React.StrictMode>,
  document.getElementById('root'));
