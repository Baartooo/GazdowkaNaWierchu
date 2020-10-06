import React, { FC } from 'react';

import House from '../../assets/images/house-main-photo.jpg';
import './Homepage.scss';

const Homepage: FC = (props) => {

  return (
    <div className={'homepage'}>
      <img
        src={House}
        title={'domek w górach'}
        alt={'domek w górach'}
        className={'homepage__background'}
      />
    </div>
  );
};

export default Homepage;
