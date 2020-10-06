import React, { FC, useEffect, useRef, useState } from 'react';
import NavigationDesktop from './navigation/NavigationDesktop';
import NavigationMobile from './navigation/NavigationMobile';
import { gsap } from 'gsap';
import { isMobile } from './helpers/navigation.helper';

import LogoWhite from '../../assets/images/logo-white.png';
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
        <NavigationMobile isOpened={isNavigationOpened} toggleNavigation={toggleNavigation}/>
        <img src={HamburgerMenu} className={'navbar__toggle-button'} onClick={toggleNavigation} />

      </header>
    );
  }
;