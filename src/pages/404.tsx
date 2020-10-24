import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import PageNotFound from '../components/pageNotFound/PageNotFound';

const NotFound: FC = () => (
  <>
    <Helmet title={'404'}/>
    <PageNotFound />
  </>
);

export default NotFound;
