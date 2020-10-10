import React, { FC } from 'react';

import photo from '../../../assets/images/housePhoto4.jpg';
import './OfferSegment.scss';

interface ISegment {
  isPhotoOnLeft: boolean;
  onPhotoLoad(): void;
}

const Segment: FC<ISegment> = (props) => {
  const { isPhotoOnLeft, onPhotoLoad } = props;

  return (
    <div className={'segment'}>
      {
        isPhotoOnLeft
          ? <>
            <div className={'segment__item'}>
              <img className={'segment__photo'} src={photo} onLoad={onPhotoLoad}/>
            </div>

            <div className={'segment__item'}>

            </div>
          </>
          : <>
            <div className={'segment__item'}>

            </div>

            <div className={'segment__item'}>
              <img className={'segment__photo'} src={photo} onLoad={onPhotoLoad}/>
            </div>
          </>
      }
    </div>
  );
};

export default Segment;
