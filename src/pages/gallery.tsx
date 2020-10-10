import React, { FC } from 'react';
import { Gallery } from '../components/gallery/Gallery';
import Footer from '../components/footer/Footer';


const GalleryPage: FC = (props) => {
  return (
    <>
      <Gallery />
      <Footer isFixed={false} />
    </>
  );
};
export default GalleryPage;
