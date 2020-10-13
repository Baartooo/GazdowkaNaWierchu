import React, { FC } from 'react';

import Segment from '../offerSegment/OfferSegment';

import photo1 from '../../../assets/images/housePhoto3.jpg';
import './ConstantOffer.scss';

interface IConstantOffer {
  onPhotoLoad(): void;
}

const ConstantOffer: FC<IConstantOffer> = (props) => {
  const { onPhotoLoad } = props;


  return (
    <div className={'constant'} id={'constant'}>
      <h2 className={'constant__header'}>Oferta stała</h2>

      <Segment isPhotoOnLeft={true} onPhotoLoad={onPhotoLoad} imgSrc={photo1} />
      <div className={'constant__separator'} />

      <Segment isPhotoOnLeft={false} onPhotoLoad={onPhotoLoad} imgSrc={photo1} />
      <div className={'constant__separator'} />

    </div>
  );
};

export default ConstantOffer;
