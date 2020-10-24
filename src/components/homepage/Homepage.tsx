import React, { FC, useEffect, useState } from 'react';

import House from '../../assets/images/background2.jpg';
import './Homepage.scss';

const Homepage: FC = (props) => {

  return (
    <section className={'homepage'}>
      <img
        src={House}
        title={'Domek Gazdówka na Wierchu'}
        alt={'Domek Gazdówka na Wierchu'}
        className={`homepage__background`}
      />
      <div className={`homepage__overlay`}>
        <h1 className={'homepage__welcome'}>
          Gazdówka na Wierchu <br />
          Zapraszamy!
        </h1>
      </div>
    </section>
  );
};

export default Homepage;
