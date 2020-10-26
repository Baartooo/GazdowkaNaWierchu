import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Offer } from '../components/offer/Offer';

const OfferPage: FC = (props) => (
  <>
    <Helmet title={'Oferta'}/>
    <Offer />
  </>
);

export default OfferPage;
