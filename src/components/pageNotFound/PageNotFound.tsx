import React, { FC } from 'react';
import StripeContainer from '../stripeContainer/StripeContainer';
import { Link } from 'gatsby';
import { home } from '../../utils/routes';

import card from '../../assets/images/businessCard.jpg';
import './PageNotFound.scss';

const PageNotFound: FC = (props) => (
  <StripeContainer isLight={true}>
    <div className={'not-found'}>
      <p className={'not-found__text'}>
        Nie znaleziono strony.<br />
        Zapraszamy na Stronę Główną
      </p>

      <Link className={'not-found__link'} to={home}>
        <img className={'not-found__card'} src={card} />
      </Link>

    </div>
  </StripeContainer>
);

export default PageNotFound;
