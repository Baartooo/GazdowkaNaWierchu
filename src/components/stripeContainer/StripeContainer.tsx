import React, { FC } from 'react';

import './StripeContainer.scss';

interface IStripeContainer {
  isLight?: boolean;
}

const StripeContainer: FC<IStripeContainer> = (props) => {
  const { children, isLight } = props;
  return (
    <div className={`stripe-container ${isLight ? 'stripe-container--light' : ''}`}>
      {children}
    </div>
  );
};

export default StripeContainer;
