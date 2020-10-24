import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Gallery } from '../components/gallery/Gallery';


const GalleryPage: FC = (props) => (
  <>
    <Helmet title={'Galeria'}/>
    <Gallery />
  </>
);

export default GalleryPage;
