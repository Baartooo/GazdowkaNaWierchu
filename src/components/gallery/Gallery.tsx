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
        allContentfulZdjecieDoGalerii {
          edges {
            node {
              photo {
                fluid(quality: 100) {
                  srcSet
                  src
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
      }
  `);

  const [
    imagesToBeLoaded,
    setImagesToBeLoaded,
  ] = useState<number>(allContentfulZdjecieDoGalerii.edges.length + 1); //+1 because of hero image
  const [areImagesVisible, setAreImagesVisible] = useState<boolean>(false);

  const checkInLoaded = (): void => {
    setImagesToBeLoaded(imagesToBeLoaded => imagesToBeLoaded - 1);
  };

  useEffect(() => {
    if (imagesToBeLoaded === 0) {
      setAreImagesVisible(true);
    }
  }, [imagesToBeLoaded]);

  return (
    <StripeContainer>
      <section className={'gallery'}>
        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '30%' }}
          title={'Galeria'}
          isVisible={areImagesVisible}
          checkInLoaded={checkInLoaded}
        />

        <div className={'gallery__images'}>
          <Loader
            visible={!areImagesVisible}
            type={'TailSpin'}
            color={'#343434'}
            width={100}
            height={100}
            className={'gallery__loader'}
          />

          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <div className={'gallery__images-wrapper'}>

                {allContentfulZdjecieDoGalerii.edges.map((image, index) => {
                  const src = image.node.photo.fluid.src;
                  const fluid = image.node.photo.fluid;

                  return (
                    <a className={`gallery__image-wrapper ${areImagesVisible ? 'visible' : ''}`}
                       href={src}
                       data-attribute={'SRL'} key={index}>

                      <Img
                        className={'gallery__image'}
                        fluid={fluid}
                        onLoad={checkInLoaded}
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





