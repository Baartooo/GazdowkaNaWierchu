import React, { FC } from 'react';

import './Layout.scss';
import { Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

};

export default Layout;
