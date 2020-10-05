import React, { FC } from 'react';
import { Navigation } from './navigation/Navigation';

import LogoWhite from '../../assets/images/logo-white.png';
import HamburgerMenu from '../../assets/svg/hamburger-menu.svg';
import './Navbar.scss';

export const Navbar: FC = () => {

  return (
    <header className={'navbar'}>

      <div className={'navbar__logo-wrapper'}>
        <img
          src={LogoWhite}
          className={'navbar__logo'}
          title={'Gazdówka na wierchu logo'}
          alt={'Gazdówka na wierchu logo'}
        />
      </div>

      <Navigation />
      <img src={HamburgerMenu}  className={'navbar__toggle-button'}/>

    </header>
  );
};