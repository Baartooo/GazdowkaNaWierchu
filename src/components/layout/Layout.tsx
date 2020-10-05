import React, { FC } from 'react';

import './Layout.scss';
import { Navbar } from '../navbar/Navbar';

const Layout: FC = (props) => {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
    </>
  );

};

export default Layout;
