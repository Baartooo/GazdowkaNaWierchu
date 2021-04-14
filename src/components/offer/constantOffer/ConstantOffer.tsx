import React, { FC } from 'react';
import { Link } from 'gatsby';

import {gallery} from '../../../utils/routes';

import Segment from '../offerSegment/OfferSegment';

import photo1 from '../../../assets/images/housePhoto3.jpg';
import photo2 from '../../../assets/images/housePhoto5.jpg';
import './ConstantOffer.scss';

const ConstantOffer: FC = (props) => {


  return (
    <div className={'constant'}>
      <p className={'constant__header'}>Po więcej zdjęć zapraszamy do <Link to={gallery} className={'constant__link'}>Galerii</Link></p>
      <Segment
        isPhotoOnLeft={true}
        imgSrcLeft={photo1}
        imgSrcRight={photo2}
      />
      <div className={'constant__separator'} />
    </div>
  );
};

export default ConstantOffer;
