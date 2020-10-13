import React, { FC } from 'react';

import './OfferSegment.scss';

interface ISegment {
  isPhotoOnLeft: boolean;
  imgSrc: string;

  onPhotoLoad(): void;
}

const Segment: FC<ISegment> = (props) => {
  const { isPhotoOnLeft, onPhotoLoad, imgSrc } = props;

  return (
    <div className={'segment'}>
      {
        isPhotoOnLeft
          ? <>
            <div className={'segment__item'}>
              <img className={'segment__photo'} src={imgSrc} onLoad={onPhotoLoad} />
            </div>

            <div className={'segment__item description'}>
              <h3 className={'segment__title'}>Nocleg + śniadanie/os/doba</h3>
              <span className={'segment__price'}>Od 80zł</span>
              <span className={'segment__price'}>Dzieci w wieku 4-7 lat:  60zł</span>
            </div>
          </>
          : <>
            <div className={'segment__item description'}>
              <h3 className={'segment__title'}>Nocleg + śniadanie/os/doba</h3>
              <span className={'segment__price'}>Od 80zł</span>
              <span className={'segment__price'}>Dzieci w wieku 4-7 lat:  60zł</span>
            </div>

            <div className={'segment__item'}>
              <img className={'segment__photo'} src={imgSrc} onLoad={onPhotoLoad} />
            </div>
          </>
      }
    </div>
  );
};

export default Segment;
