import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { AuthorizationStatus } from '../../const';

function Header(props) {
  const {authorizationStatus} = props;
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <a href="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.AUTH ? (
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </>
        ) : (
          <a href="/login" className="user-block__link">Sign in</a>
        )}
      </ul>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(Header);
