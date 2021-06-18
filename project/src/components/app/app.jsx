import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import PropTypes from 'prop-types';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import Film from '../film/film.jsx';
import AddReview from '../add-review/add-review.jsx';
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
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview />
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
  }),
};

export default App;
