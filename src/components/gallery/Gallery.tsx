import React, { FC, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Loader from 'react-loader-spinner';
import StripeContainer from '../stripeContainer/StripeContainer';
import HeroHeader from '../heroHeader/HeroHeader';

import heroImg from '../../assets/images/galleryHeroImage.jpg';
import './Gallery.scss';


const options = {
  settings: {
    disablePanzoom: true,
    disableWheelControls: true,
    hideControlsAfter: 3000,
    lightboxTransitionSpeed: 0.6,
    lightboxTransitionTimingFunction: 'linear',
    overlayColor: 'rgba(0, 0, 0, 0.9)',
    slideAnimationType: 'fade',
    slideSpringValues: [300, 200],
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: 'linear',
  },
  buttons: {
    showAutoplayButton: false,
    showThumbnailsButton: false,
    showDownloadButton: false,
  },
};

export const Gallery: FC = (props) => {

  const { allContentfulZdjecieDoGalerii } = useStaticQuery(
    graphql`
query MyQuery {
  allContentfulZdjecieDoGalerii(sort: {fields: title}) {
    edges {
      node {
        photo {
          fluid(quality: 80) {
            srcSet
            src
            aspectRatio
            sizes
            base64
          }
          title
        }
      }
    }
  }
}
  `);

  return (
    <StripeContainer>
      <section className={'gallery'}>
        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '30%' }}
          title={'Galeria'}
          isVisible={true}
          checkInLoaded={()=>{}}
        />

        <div className={'gallery__images'}>
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className={'gallery__images-wrapper'}>

                {allContentfulZdjecieDoGalerii.edges.map((image, index) => {
                  const src = image.node.photo.fluid.src;
                  const fluid = image.node.photo.fluid;

                  return (
                    <a className={`gallery__image-wrapper`}
                       href={src}
                       data-attribute={'SRL'} key={index}>

                      <Img
                        className={'gallery__image'}
                        fluid={fluid}
                        draggable={false}
                        objectFit="cover"
                        objectPosition="50% 50%"
                      />

                    </a>
                  );
                })}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>

      </section>

    </StripeContainer>
  );
};





