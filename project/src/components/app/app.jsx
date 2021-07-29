import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../main/main';
import PropTypes from 'prop-types';
import NotFoundScreen from '../not-found-screen/not-found-screen.jsx';
import MyList from '../my-list/my-list.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import AddReview from '../film/add-review.jsx';
import Player from '../player/player.jsx';
import FilmPage from '../film/film-page';
import LoadingScreen from '../loading-screen/loading-screen';
import { isCheckedAuth } from '../../utils/utils';

function App(props) {
  const {promoFilm, films, authorizationStatus, isDataLoaded} = props;
  const filmsAll = films;
  const getFilmsFilter = (param) => filmsAll.filter((item) => item.id === +param.match.params.id)[0];

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }
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
        <Route
          exact
          path={AppRoute.FILM_OVERVIEW}
          render={(param) => (
            <FilmPage
              film={getFilmsFilter(param)}
            />
          )}
        />
        <Route exact path={AppRoute.ADD_REVIEW}
          render={(param) => (
            <AddReview
              authorization={authorizationStatus}
              film={getFilmsFilter(param)}
            />
          )}
        />
        <Route exact path={AppRoute.PLAYER}
          render={(param) => (
            <Player
              authorization={authorizationStatus}
              film={getFilmsFilter(param)}
            />
          )}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  promoFilm: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    released: PropTypes.number.isRequired,
  }),
  // comments: PropTypes.arrayOf(PropTypes.shape({
  //   user: PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }),
  //   id: PropTypes.number.isRequired,
  //   rating: PropTypes.number.isRequired,
  //   comment: PropTypes.string.isRequired,
  //   date: PropTypes.string.isRequired,
  // })).isRequired,
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

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  films: state.films,
  promoFilm: state.promoFilm,
});

export {App};
export default connect(mapStateToProps, null)(App);
