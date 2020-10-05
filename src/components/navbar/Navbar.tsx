import React, { FC, useEffect, useRef, useState } from 'react';
import Navigation from './navigation/Navigation';
import { gsap } from 'gsap';
import { isMobile } from './helpers/navigation.helper';

import LogoWhite from '../../assets/images/logo-white.png';
import HamburgerMenu from '../../assets/svg/hamburger-menu.svg';
import './Navbar.scss';

export const Navbar: FC = () => {
    const [isNavigationOpened, setIsNavigationOpened] = useState<boolean>(false);
    const [isInitial, setIsInitial] = useState<boolean>(true);
    const refNavigation = useRef<HTMLDivElement>(null);

    const tl = gsap.timeline();

    const showNavigation = () => {
      tl.to(refNavigation.current, {
        transformOrigin: 'top',
        maxHeight: '500px',
        duration: .3,
        ease: 'power1.easeIn',
      });

    };

    const hideNavigation = () => {
      tl.to(refNavigation.current, {
        transformOrigin: 'top',
        maxHeight: 0,
        duration: .1,
        ease: 'power1.easeOut',
      });

    };

    const toggleNavigation = () => {
      setIsNavigationOpened(state => !state);
    };

    const setStateDependingOnWidth = () => {
      if (isMobile()) {
        gsap.set(refNavigation.current, { maxHeight: 0 });
        setIsNavigationOpened(false);
      } else {
        gsap.set(refNavigation.current, { maxHeight: 500 });
        setIsNavigationOpened(true);
      }
      setIsInitial(false);
    };

    useEffect(() => {
      if (isInitial) {
        setStateDependingOnWidth();
      } else {
        if (isNavigationOpened) {
          showNavigation();
        } else {
          hideNavigation();
        }
      }
      window.addEventListener('resize', setStateDependingOnWidth);
      return () => {
        tl.kill();
        window.removeEventListener('resize', setStateDependingOnWidth);
      };
    }, [isNavigationOpened]);

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

        <Navigation wrapperRef={refNavigation} hideNavigation={toggleNavigation} />
        <img src={HamburgerMenu} className={'navbar__toggle-button'} onClick={toggleNavigation} />

      </header>
    );
  }
;