import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Contact from '../components/contact/Contact';

const ContactPage: FC = (props) => (
  <>
    <Helmet title={'Kontakt'}/>
    <Contact />
  </>
);

export default ContactPage;
