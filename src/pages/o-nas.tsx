import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import About from '../components/about/About';


const AboutPage: FC = (props) => (
  <>
    <Helmet title={'O nas'}/>
    <About />
  </>
);

export default AboutPage;
