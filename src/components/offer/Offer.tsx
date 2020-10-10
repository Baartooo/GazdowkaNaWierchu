import React, { FC, useEffect, useState } from 'react';

import StripeContainer from '../stripeContainer/StripeContainer';
import PageHeader from '../pageHeader/PageHeader';
import Segment from './offerSegment/OfferSegment';
import Loader from 'react-loader-spinner';

import './Offer.scss';

export const Offer: FC = (props) => {
  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(3);
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
        <PageHeader content={'Nasza oferta'} />

        <Loader
          visible={!areImagesVisible}
          type={'TailSpin'}
          color={'#343434'}
          width={100}
          height={100}
          className={'offer__loader'}
        />

        <div className={`offer__segments ${areImagesVisible ? 'visible' : ''}`}>

          <Segment isPhotoOnLeft={true} onPhotoLoad={checkInLoaded} />
          <div className={'offer__separator'} />
          <Segment isPhotoOnLeft={false} onPhotoLoad={checkInLoaded} />
          <div className={'offer__separator'} />
          <Segment isPhotoOnLeft={true} onPhotoLoad={checkInLoaded} />
        </div>

      </section>
    </StripeContainer>
  );
};

