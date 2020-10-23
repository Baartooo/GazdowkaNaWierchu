import React, { FC } from 'react';
import About from '../components/about/About';
import Footer from '../components/footer/Footer';

const AboutPage: FC = (props) => {
  return (
    <>
      <About />
      <Footer isFixed={false} />
    </>
  );
};

export default AboutPage;
