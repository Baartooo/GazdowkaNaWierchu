import React, { FC, useEffect, useState } from 'react';

import House from '../../assets/images/house-main-photo.jpg';
import './Homepage.scss';

const Homepage: FC = (props) => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState<boolean>(false);

  return (
    <div className={'homepage'}>
      <img
        src={House}
        title={'domek w górach'}
        alt={'domek w górach'}
        className={`homepage__background ${isBackgroundLoaded ? 'loaded' : ''}`}
        onLoad={() => setIsBackgroundLoaded(true)}
      />
      <div className={`homepage__overlay ${isBackgroundLoaded ? 'visible' : ''}`}>
        <h1 className={'homepage__welcome'}>
          Gazdówka na Wierchu <br />
          Zapraszamy!
        </h1>
      </div>
    </div>
  );
};

export default Homepage;
