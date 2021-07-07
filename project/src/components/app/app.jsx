import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import PropTypes from 'prop-types';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import FilmOverview from '../film/overview.jsx';
import FilmDetails from '../film/details';
import AddReview from '../film/add-review.jsx';
import FilmReviews from '../film/reviews.jsx';
import Player from '../player/player.jsx';

function App({promoFilm, films, comments}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            promoFilm={promoFilm}
            films={films}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.MYLIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM_OVERVIEW}>
          <FilmOverview authorization={promoFilm.authorization}/>
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview authorization={promoFilm.authorization}/>
        </Route>
        <Route exact path={AppRoute.FILM_REVIEWS}>
          <FilmReviews
            authorization={promoFilm.authorization}
            comments={comments}
          />
        </Route>
        <Route exact path={AppRoute.FILM_DETAILS}>
          <FilmDetails authorization={promoFilm.authorization}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  promoFilm: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    relise: PropTypes.number.isRequired,
    authorization: PropTypes.bool.isRequired,
  }),
  comments: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

export default App;
