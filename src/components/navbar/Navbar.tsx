import React, { FC, useState } from 'react';
import NavigationDesktop from './navigation/NavigationDesktop';
import NavigationMobile from './navigation/NavigationMobile';
import info from '../../company-info/info.json';

import LogoWhite from '../../assets/images/logo-white.png';
import Phone from '../../assets/svg/phone-call.svg';
import HamburgerMenu from '../../assets/svg/hamburger-menu.svg';
import './Navbar.scss';

export const Navbar: FC = () => {
    const [isNavigationOpened, setIsNavigationOpened] = useState<boolean>(false);

    const toggleNavigation = () => {
      setIsNavigationOpened(isNavigationOpened => !isNavigationOpened);
    };


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
