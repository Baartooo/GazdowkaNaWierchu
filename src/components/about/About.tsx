import React, { FC, useEffect, useState } from 'react';

import StripeContainer from '../stripeContainer/StripeContainer';
import HeroHeader from '../heroHeader/HeroHeader';
import Loader from 'react-loader-spinner';

import heroImg from '../../assets/images/aboutHeroImg.jpg';
import './About.scss';


const About: FC = (props) => {
  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(1);
  const [areImagesVisible, setAreImagesVisible] = useState<boolean>(false);


  const checkInLoaded = (): void => {
    setImagesToBeLoaded(imagesToBeLoaded => imagesToBeLoaded - 1);
  };

  useEffect(() => {
    if (imagesToBeLoaded === 0) {
      setAreImagesVisible(true);
    }
  }, [imagesToBeLoaded]);

  return (
    <div className={'about'}>

      <HeroHeader
        imageSrc={heroImg}
        objectPosition={{ x: '50%', y: '20%' }}
        title={'O nas'}
        isVisible={areImagesVisible}
        checkInLoaded={checkInLoaded}
      />

      <Loader
        visible={!areImagesVisible}
        type={'TailSpin'}
        color={'#343434'}
        width={100}
        height={100}
        className={'about__loader'}
      />

      <div className={`about__content ${areImagesVisible ? 'visible' : ''}`}>

      </div>

    </div>
  );
};

export default About;
