import React from 'react';
import PropTypes from 'prop-types';

function Header(authorization) {
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
        {authorization ? (
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
  promoFilm: PropTypes.shape({
    authorization: PropTypes.bool.isRequired,
  }),
};

export default Header;