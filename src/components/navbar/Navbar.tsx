import React, { FC } from 'react';

import LogoWhite from '../../assets/images/logo-white.png';
import './Navbar.scss';
import { Navigation } from './navigation/Navigation';

export const Navbar: FC = () => {
  console.log();

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

    </header>
  );
};