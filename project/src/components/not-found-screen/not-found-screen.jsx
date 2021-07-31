import React from 'react';
import Logo from '../header/logo';
import Auth from '../header/auth';

function NotFoundScreen() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo/>
        <Auth/>
      </header>

      <section>
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
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

export default NotFoundScreen;
