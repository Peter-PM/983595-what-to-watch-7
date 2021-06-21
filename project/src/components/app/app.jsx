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

function App({promoFilm}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main promoFilm={promoFilm}/>
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
          <FilmReviews authorization={promoFilm.authorization}/>
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
};

export default App;
