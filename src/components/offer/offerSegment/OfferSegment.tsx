import React, { FC } from 'react';

import './OfferSegment.scss';

interface ISegment {
  isPhotoOnLeft: boolean;
  imgSrcLeft: string;
  imgSrcRight: string;
}

const Segment: FC<ISegment> = (props) => {
  const {
    isPhotoOnLeft,
    imgSrcLeft,
    imgSrcRight,
  } = props;

  return (
    <div className={`segment ${isPhotoOnLeft ? 'photo-left' : 'photo-right'}`}>


      <div className={'segment__item'}>
        <img
          className={'segment__photo'}
          src={imgSrcLeft}
          title={'Pokój - Gazdówka na Wierchu'}
          alt={'Pokój - Gazdówka na Wierchu'}
        />
      </div>

      <div className={'segment__item'}>
        <img
          className={'segment__photo'}
          src={imgSrcRight}
          title={'Pokój - Gazdówka na Wierchu'}
          alt={'Pokój - Gazdówka na Wierchu'}
        />
      </div>

    </div>
  );
};

export default Segment;
