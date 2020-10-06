import React, { FC } from 'react';
import { Link } from 'gatsby';

import './NavigationMobile.scss';

interface INavigation {
  isOpened: boolean;

  toggleNavigation(): void;
}

const Navigation: FC<INavigation> = (props) => {
  const {
    isOpened,
    toggleNavigation,
  } = props;

  return (
    <nav className={`dropdown-navigation ${isOpened ? 'opened' : ''}`} role={'navigation'}>
      <div className={'dropdown-navigation__item'}>
        <Link to="/" className={'dropdown-navigation__link'} activeClassName={'active'} onClick={toggleNavigation}>
          witamy
        </Link>
      </div>
      <div className={'dropdown-navigation__item'}>
        <Link to="/offer" className={'dropdown-navigation__link'} activeClassName={'active'} onClick={toggleNavigation}>
          oferta
        </Link>
      </div>
      <div className={'dropdown-navigation__item'}>
        <Link to="/about" className={'dropdown-navigation__link'} activeClassName={'active'} onClick={toggleNavigation}>
          o nas
        </Link>
      </div>
      <div className={'dropdown-navigation__item'}>
        <Link to="/gallery" className={'dropdown-navigation__link'} activeClassName={'active'}
              onClick={toggleNavigation}>
          galeria
        </Link>
      </div>
      <div className={'dropdown-navigation__item'}>
        <Link to="/contact" className={'dropdown-navigation__link'} activeClassName={'active'}
              onClick={toggleNavigation}>
          kontakt
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);