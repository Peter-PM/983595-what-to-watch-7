import React from 'react';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { AppRoute } from '../../const';
import {AuthorizationStatus} from '../../const';
import {logout, fetchFavoriteFilm} from '../../store/api-actions';

function Auth(props) {
  const {authorizationStatus, logoutUser, getMyList, user} = props;

  const history = useHistory();

  const handleClick = (evt) => {
    evt.preventDefault();

    logoutUser();
  };

  const handleUserAvatarClick = (evt) => {
    evt.preventDefault();

    getMyList();

    history.push(AppRoute.MY_LIST);
  };

  return (
    <ul className="user-block">
      {authorizationStatus === AuthorizationStatus.AUTH ? (
        <>
          <li className="user-block__item">
            {user.email}
          </li>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src={user.avatarUrl}
                alt="User avatar"
                width="63"
                height="63"
                onClick={handleUserAvatarClick}
              />
            </div>
          </li>
          <li className="user-block__item">
            <a href="/" className="user-block__link" onClick={handleClick}>
              Sign out
            </a>
          </li>
        </>
      ) : (
        <a href="/login" className="user-block__link">
          Sign in
        </a>
      )}
    </ul>
  );
}

Auth.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  logoutUser: PropTypes.func.isRequired,
  getMyList: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser() {
    dispatch(logout());
  },
  getMyList() {
    dispatch(fetchFavoriteFilm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
