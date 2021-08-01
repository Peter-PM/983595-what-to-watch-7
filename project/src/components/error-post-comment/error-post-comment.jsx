import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../header/logo';
import Auth from '../header/auth';

function ErrorPostScreen({filmId}) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <Auth/>
      </header>

      <section>
        <h1>Ошибка отправки комментария</h1>
        <p>
          <Link to={`films/${filmId}`}>Вернуться к фильму</Link>
        </p>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

ErrorPostScreen.propTypes = {
  filmId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  filmId: state.activeFilm.id,
});

export default connect(mapStateToProps, null)(ErrorPostScreen);
