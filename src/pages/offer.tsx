import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

import { Offer } from '../components/offer/Offer';
import Footer from '../components/footer/Footer';


const OfferPage: FC = (props) => {
  return (
    <>
      <Offer />
      <Footer isFixed={false} />
    </>
  );
};

export default OfferPage;
