import React, { FC, useEffect, useState } from 'react';

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


const options = {};

export const Gallery: FC = (props) => {
  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(images.length);
  const [areImagesVisible, setAreImagesVisible] = useState<boolean>(false);

  const checkInLoaded = (): void => {
    setImagesToBeLoaded(imagesToBeLoaded => imagesToBeLoaded - 1);
  };

  useEffect(() => {
    if (imagesToBeLoaded === 0) {
      setAreImagesVisible(true);
      console.log('done');
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

                {images.map((image, index) => {
                  return (
                    <a className={`gallery__image-wrapper ${areImagesVisible ? 'visible' : ''}`}
                       href={image}
                       data-attribute={'SRL'} key={index}>

                      <img className={'gallery__image'} src={image} onLoad={checkInLoaded} />

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
