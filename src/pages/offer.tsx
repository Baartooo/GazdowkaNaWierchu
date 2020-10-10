import React, { FC } from 'react';

import { Offer } from '../components/offer/Offer';
import Footer from '../components/footer/Footer';


const OfferPage: FC = (props) => {
  return (
    <>
      <Offer />
      <Footer isFixed={true} />
    </>
  );
};

export default OfferPage;
