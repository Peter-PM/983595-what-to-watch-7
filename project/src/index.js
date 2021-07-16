import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import comments from './mocks/reviews';
import films from './mocks/films';
import {reducer} from './store/reducer';
import { getRandomNumber } from './utils/data';

const store = createStore(
  reducer,
  composeWithDevTools(),
);
const promoFilm = films[getRandomNumber(0, films.length-1)];

const authorization = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoFilm={promoFilm}
        films={films}
        comments={comments}
        authorization={authorization}
      />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root'));
