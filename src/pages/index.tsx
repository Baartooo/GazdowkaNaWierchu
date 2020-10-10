import React, { FC } from 'react';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Homepage from '../components/homepage/Homepage';
import Footer from '../components/footer/Footer';


const RootIndex: FC = (props) => {

  return (
    <>
      <Homepage />
      <Footer isFixed={true} />
    </>
  );
};

export default RootIndex;
