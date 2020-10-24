import React, { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { helmet } from '../../utils/helmet';

import './Layout.scss';

const Layout: FC = (props) => {
  const { children } = props;


  return (
    <>
      <Helmet {...helmet} />

      <Navbar />
      <main>
        {children}
      </main>
      <Footer isFixed={false} />
    </>
  );

};

export default Layout;
