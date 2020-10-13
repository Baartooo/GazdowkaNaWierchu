import React, { FC, useEffect, useState } from 'react';

import StripeContainer from '../stripeContainer/StripeContainer';
import Loader from 'react-loader-spinner';
import OfferNavigation from './navigation/OfferNavigation';
import HeroHeader from '../heroHeader/HeroHeader';
import ConstantOffer from './constantOffer/ConstantOffer';

import heroImg from '../../assets/images/offerHeroImage.jpg';
import './Offer.scss';

export const Offer: FC = (props) => {
  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(1);
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
      <section className={'offer'}>

        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '45%' }}
          title={'Nasza oferta'}
          isVisible={areImagesVisible}
          checkInLoaded={checkInLoaded}
        />

        <Loader
          visible={!areImagesVisible}
          type={'TailSpin'}
          color={'#343434'}
          width={100}
          height={100}
          className={'offer__loader'}
        />

        <div className={`offer__segments ${areImagesVisible ? 'visible' : ''}`}>
          <OfferNavigation />

          <ConstantOffer onPhotoLoad={checkInLoaded}/>


        </div>

      </section>
    </StripeContainer>
  );
};

