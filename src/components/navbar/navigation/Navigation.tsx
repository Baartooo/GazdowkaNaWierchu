import React, { FC } from 'react';
import { Link } from 'gatsby';

import './Navigation.scss';

export const Navigation: FC = (props) => {

  return (
    <nav className={'navbar__navigation'} role={'navigation'}>
      <div className={'navbar__navigation-item'}>
        <Link to="/" className={'navbar__navigation-link'} activeClassName={'active'}>
          witamy
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/offer" className={'navbar__navigation-link'} activeClassName={'active'}>
          oferta
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/about" className={'navbar__navigation-link'} activeClassName={'active'}>
          o nas
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/gallery" className={'navbar__navigation-link'} activeClassName={'active'}>
          galeria
        </Link>
      </div>
      <div className={'navbar__navigation-item'}>
        <Link to="/contact" className={'navbar__navigation-link'} activeClassName={'active'}>
          kontakt
        </Link>
      </div>
    </nav>
  );
};