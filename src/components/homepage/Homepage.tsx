import React, { FC, useEffect, useState } from 'react';

import House from '../../assets/images/background2.jpg';
import './Homepage.scss';

const Homepage: FC = (props) => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState<boolean>(false);

  return (
    <section className={'homepage'}>
      <img
        src={House}
        title={'Domek Gazdówka na Wierchu'}
        alt={'Domek Gazdówka na Wierchu'}
        className={`homepage__background ${isBackgroundLoaded ? 'loaded' : ''}`}
        onLoad={() => setIsBackgroundLoaded(true)}
      />
      <div className={`homepage__overlay ${isBackgroundLoaded ? 'visible' : ''}`}>
        <h1 className={'homepage__welcome'}>
          Gazdówka na Wierchu <br />
          Zapraszamy!
        </h1>
      </div>
    </section>
  );
};

export default Homepage;
