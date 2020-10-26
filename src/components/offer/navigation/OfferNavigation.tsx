import React, { FC } from 'react';

import './OfferNavigation.scss';

interface IOfferNavigation {
  handleConstantClick(): void;

  handleSeasonalClick(): void;
}

const OfferNavigation: FC<IOfferNavigation> = (props) => {
  const { handleConstantClick, handleSeasonalClick } = props;

  return (
    <div className={'offer-navigation'}>
      <div className={'offer-navigation__item'} onClick={handleConstantClick}>
        oferta stała
      </div>

      <div className={'offer-navigation__item'} onClick={handleSeasonalClick}>
        oferta specjalna
      </div>

    </div>
  );
};

export default OfferNavigation;
