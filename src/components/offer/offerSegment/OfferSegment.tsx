import React, { FC } from 'react';

import './OfferSegment.scss';

interface ISegment {
  isPhotoOnLeft: boolean;
  imgSrc: string;
  title: string;
  price: number;
  kids: string;

  onPhotoLoad(): void;
}

const Segment: FC<ISegment> = (props) => {
  const {
    isPhotoOnLeft,
    onPhotoLoad,
    imgSrc,
    title,
    price,
    kids,
  } = props;

  return (
    <div className={`segment ${isPhotoOnLeft ? 'photo-left' : 'photo-right'}`}>

      <div className={'segment__item'}>
        <img
          className={'segment__photo'}
          src={imgSrc}
          onLoad={onPhotoLoad}
          title={'Pokój - Gazdówka na Wierchu'}
          alt={'Pokój - Gazdówka na Wierchu'}
        />
      </div>

      <div className={'segment__item description'}>
        <h3 className={'segment__title'}>{title}</h3>
        <span className={'segment__price'}>Od {price}zł</span>
        <span className={'segment__price'}>{kids}</span>
      </div>

    </div>
  );
};

export default Segment;
