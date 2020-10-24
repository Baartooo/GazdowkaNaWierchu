import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Homepage from '../components/homepage/Homepage';

const RootIndex: FC = (props) => (
  <>
    <Helmet title={'Witamy'}/>
    <Homepage />
  </>
);

export default RootIndex;
