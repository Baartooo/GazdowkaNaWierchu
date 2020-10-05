import React, { FC } from 'react';
import { Link } from 'gatsby';

import './Navigation.scss';

interface INavigation {
  wrapperRef: any;
  hideNavigation: () => void;
}

const Navigation: FC<INavigation> = (props) => {
  const {
    wrapperRef,
    hideNavigation,
  } = props;

  return (
    <nav className={'navbar__navigation'} role={'navigation'} ref={wrapperRef}>
      <div className={'navbar__navigation-item'}>
        <Link to="/" className={'navbar__navigation-link'} activeClassName={'active'} onClick={hideNavigation}>
          witamy
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/offer" className={'navbar__navigation-link'} activeClassName={'active'} onClick={hideNavigation}>
          oferta
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/about" className={'navbar__navigation-link'} activeClassName={'active'} onClick={hideNavigation}>
          o nas
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/gallery" className={'navbar__navigation-link'} activeClassName={'active'} onClick={hideNavigation}>
          galeria
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/contact" className={'navbar__navigation-link'} activeClassName={'active'} onClick={hideNavigation}>
          kontakt
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(Navigation);