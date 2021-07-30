import React from 'react';
import Logo from './logo';
import Auth from './auth';

function Header(props) {

  return (
    <header className="page-header film-card__head">

      <Logo/>

      <Auth/>
    </header>
  );
}


export default Header;
