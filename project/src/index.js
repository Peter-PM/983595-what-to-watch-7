import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import comments from './mocks/reviews';
import films from './mocks/films';

const promoFilm = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  relise: 2014,
  authorization: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      promoFilm={promoFilm}
      films={films}
      comments={comments}
    />
  </React.StrictMode>,
  document.querySelector('#root'));
