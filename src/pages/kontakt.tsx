import React, { FC } from 'react';
import Contact from '../components/contact/Contact';
import Footer from '../components/footer/Footer';

const ContactPage: FC = (props) => {
  return (
    <>
      <Contact />
      <Footer isFixed={false} />
    </>
  );
};

export default ContactPage;
