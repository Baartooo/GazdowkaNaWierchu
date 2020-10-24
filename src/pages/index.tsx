import React, { FC } from 'react';
import get from 'lodash/get';
import { Helmet } from 'react-helmet';
import Homepage from '../components/homepage/Homepage';

const RootIndex: FC = (props) => (
  <>
    <Homepage />
  </>
);

export default RootIndex;
