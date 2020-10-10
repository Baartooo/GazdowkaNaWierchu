import React, { FC, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { PageHeader } from '../pageHeader/PageHeader';
import SimpleReactLightbox from 'simple-react-lightbox';
import { SRLWrapper } from 'simple-react-lightbox';
import Loader from 'react-loader-spinner';


import './Gallery.scss';
import housePhoto1 from '../../assets/images/housePhoto1.jpg';
import housePhoto2 from '../../assets/images/housePhoto2.jpg';
import housePhoto3 from '../../assets/images/housePhoto3.jpg';
import housePhoto4 from '../../assets/images/housePhoto4.jpg';
import housePhoto5 from '../../assets/images/housePhoto5.jpg';
import housePhoto6 from '../../assets/images/housePhoto6.jpg';
import housePhoto7 from '../../assets/images/housePhoto7.jpg';
import housePhoto8 from '../../assets/images/housePhoto8.jpg';
import housePhoto9 from '../../assets/images/housePhoto9.jpg';

const images = [
  housePhoto1,
  housePhoto2,
  housePhoto3,
  housePhoto4,
  housePhoto5,
  housePhoto6,
  housePhoto7,
  housePhoto8,
  housePhoto9,
];


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

  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(images.length);
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
    <div className={'gallery'}>
      <section className={'gallery__wrapper'}>
        <PageHeader content={'Galeria'} />

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

                      {/*<img className={'gallery__image'} src={src} onLoad={checkInLoaded} />*/}
                      <Img className={'gallery__image'} fluid={fluid} onLoad={checkInLoaded} />

                    </a>
                  );
                })}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>

      </section>

    </div>
  );
};





