import React, { FC, ReactNode } from 'react';

import './CTAButton.scss';

interface ICTAButton {
  children: ReactNode;
}

const CTAButton: FC<ICTAButton> = (props) => {
  const { children } = props;

  return (
    <div className={'cta-button'}>
      {children}
    </div>
  );
};

export default CTAButton;
