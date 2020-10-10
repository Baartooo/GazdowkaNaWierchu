import React, { FC } from 'react';

import './StripeContainer.scss';

const StripeContainer: FC = (props) => {
  const { children } = props;
  return (
    <div className={'stripe-container'}>
      {children}
    </div>
  );
};

export default StripeContainer;
