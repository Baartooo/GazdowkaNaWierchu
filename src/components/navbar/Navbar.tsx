import React, { FC, useState } from 'react';
import NavigationDesktop from './navigation/NavigationDesktop';
import NavigationMobile from './navigation/NavigationMobile';
import info from '../../company-info/info.json';
import { Link } from 'gatsby';


import LogoWhite from '../../assets/images/logo-white.png';
import Phone from '../../assets/svg/phone-call.svg';
import HamburgerMenu from '../../assets/svg/hamburger-menu.svg';
import { home } from '../../utils/routes';

import './Navbar.scss';

export const Navbar: FC = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState<boolean>(false);

  const toggleNavigation = () => {
    setIsNavigationOpened(isNavigationOpened => !isNavigationOpened);
  };

  return (
    <header className={'navbar'}>
      <Link to={home} className={'navbar__logo-link'}>
        <div className={'navbar__logo-wrapper'}>
          <img
            src={LogoWhite}
            className={'navbar__logo'}
            title={'Gazdówka na wierchu logo'}
            alt={'Gazdówka na wierchu logo'}
          />
        </div>
      </Link>

      <NavigationDesktop />
      <NavigationMobile isOpened={isNavigationOpened} toggleNavigation={toggleNavigation} />

      <div className={'navbar__phone-wrapper'}>
        <a href={`tel:${info.phoneNumber}`} className={'navbar__phone-link'}>
          <img src={Phone} className={'navbar__phone'} />
          <span className={'navbar__phone-number'}>{info.phoneNumber}</span>
        </a>
      </div>


      <img src={HamburgerMenu} className={'navbar__toggle-button'} onClick={toggleNavigation} />

    </header>
  );
};
