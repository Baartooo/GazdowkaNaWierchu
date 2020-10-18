import React, { FC } from 'react';

import Segment from '../offerSegment/OfferSegment';

import photo1 from '../../../assets/images/housePhoto3.jpg';
import photo2 from '../../../assets/images/housePhoto5.jpg';
import './ConstantOffer.scss';

interface IConstantOffer {
  onPhotoLoad(): void;
}

const ConstantOffer: FC<IConstantOffer> = (props) => {
  const { onPhotoLoad } = props;


  return (
    <div className={'constant'} id={'constant'}>
      <h2 className={'constant__header'}>Oferta stała</h2>

      <Segment
        isPhotoOnLeft={true}
        onPhotoLoad={onPhotoLoad}
        imgSrc={photo1}
        title={'Nocleg + śniadanie/os/doba'}
        price={80}
        kids={'Dzieci w wieku 4-7 lat:  60zł'}
      />
      <div className={'constant__separator'} />

      <Segment
        isPhotoOnLeft={false}
        onPhotoLoad={onPhotoLoad}
        imgSrc={photo2}
        title={'Nocleg + śniadanie + obiadokolacja/os/doba'}
        price={110}
        kids={'Dzieci w wieku 4-7 lat: 90zł'}
      />
      <div className={'constant__separator'} />

    </div>
  );
};

export default ConstantOffer;
