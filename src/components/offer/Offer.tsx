import React, { FC } from 'react';

import './Offer.scss';
import StripeContainer from '../stripeContainer/StripeContainer';
import PageHeader from '../pageHeader/PageHeader';

export const Offer: FC = (props) => {
  return (
    <StripeContainer>
      <section className={'offer'}>
        <PageHeader content={'Oferta'} />

      </section>
    </StripeContainer>
  );
};

