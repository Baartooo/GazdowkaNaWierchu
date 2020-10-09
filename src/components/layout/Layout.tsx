import React, { FC, useState } from 'react';
import { Navbar } from '../navbar/Navbar';
import Footer from '../footer/Footer';

import './Layout.scss';

const Layout: FC = (props) => {
  const { children } = props;


  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  );

};

export default Layout;
