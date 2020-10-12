import React, { FC } from 'react';

import './OfferNavigation.scss';

const OfferNavigation: FC = (props) => {
  return (
    <div className={'offer-navigation'}>
      <div className={'offer-navigation__item'}>
        oferta stała
      </div>
      {/*<div className={'offer-navigation__separator'}/>*/}
      <div className={'offer-navigation__item'}>
        oferta sezonowa
      </div>

    </div>
  );
};

export default OfferNavigation;
