import React, { FC, useEffect, useState } from 'react';

import StripeContainer from '../stripeContainer/StripeContainer';
import PageHeader from '../pageHeader/PageHeader';
import Segment from './offerSegment/OfferSegment';
import Loader from 'react-loader-spinner';

import heroImg from '../../assets/images/offerHeroImage.jpg';
import './Offer.scss';
import OfferNavigation from './navigation/OfferNavigation';

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
        <div className={`offer__hero ${areImagesVisible ? 'visible' : ''}`}>
          <img className={'offer__hero-image'} src={heroImg} onLoad={checkInLoaded} />
          <PageHeader content={'Nasza oferta'} color={'white'} />
        </div>

        <OfferNavigation />

        <Loader
          visible={!areImagesVisible}
          type={'TailSpin'}
          color={'#343434'}
          width={100}
          height={100}
          className={'offer__loader'}
        />

        <div className={`offer__segments ${areImagesVisible ? 'visible' : ''}`}>

        </div>

      </section>
    </StripeContainer>
  );
};

