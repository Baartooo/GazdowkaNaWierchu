import React, { FC } from 'react';
import { Link } from 'gatsby';
import {
  home,
  offer,
  about,
  gallery,
  contact,
} from '../../../utils/routes';

import './NavigationDesktop.scss';

const NavigationDesktop: FC = (props) => {


  return (
    <nav className={'navigation'} role={'navigation'}>
      <div className={'navigation__item'}>
        <Link to={home} className={'navigation__link'} activeClassName={'active'}>
          witamy
        </Link>
      </div>
      <div className={'navigation__item'}>
        <Link to={offer} className={'navigation__link'} activeClassName={'active'}>
          oferta
        </Link>
      </div>
      <div className={'navigation__item'}>
        <Link to={about} className={'navigation__link'} activeClassName={'active'}>
          o nas
        </Link>
      </div>
      <div className={'navigation__item'}>
        <Link to={gallery} className={'navigation__link'} activeClassName={'active'}>
          galeria
        </Link>
      </div>
      <div className={'navigation__item'}>
        <Link to={contact} className={'navigation__link'} activeClassName={'active'}>
          kontakt
        </Link>
      </div>
    </nav>
  );
};

export default React.memo(NavigationDesktop);
