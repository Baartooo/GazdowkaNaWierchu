import React, { FC, useEffect, useState } from 'react';
import info from '../../company-info/info.json';
import HeroHeader from '../heroHeader/HeroHeader';
import StripeContainer from '../stripeContainer/StripeContainer';

import Loader from 'react-loader-spinner';

import heroImg from '../../assets/images/contactHeroImg.jpg';
import Facebook from '../../assets/svg/facebook.svg';
import Phone from '../../assets/svg/phone-call.svg';
import Info from '../../assets/svg/info.svg';
import Mail from '../../assets/svg/mail.svg';
import Pin from '../../assets/svg/pin.svg';
import './Contact.scss';

const Contact: FC = (props) => {
  const [imagesToBeLoaded, setImagesToBeLoaded] = useState<number>(1);
  const [areImagesVisible, setAreImagesVisible] = useState<boolean>(false);

  const {
    facebookName,
    facebookLink,
    mail,
    addressFirstLine,
    addressSecondLine,
    addressLink,
    companyInfoFirstLine,
    companyInfoSecondLine,
    companyInfoThirdLine,
    phoneNumber,
  } = info;

  const checkInLoaded = (): void => {
    setImagesToBeLoaded(imagesToBeLoaded => imagesToBeLoaded - 1);
  };

  useEffect(() => {
    if (imagesToBeLoaded === 0) {
      setAreImagesVisible(true);
    }
  }, [imagesToBeLoaded]);

  return (
    <StripeContainer isLight={true}>
      <div className={'contact'}>
        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '63%' }}
          title={'Kontakt'}
          isVisible={areImagesVisible}
          checkInLoaded={checkInLoaded}
        />

        <Loader
          visible={!areImagesVisible}
          type={'TailSpin'}
          color={'#343434'}
          width={100}
          height={100}
          className={'contact__loader'}
        />

        <div className={`contact__content ${areImagesVisible ? 'visible' : ''}`}>
          <div className={'contact__info'}>
            <div className={'contact__segment'}>
              <Pin className={'contact__icon'} />
              <p className={'contact__data'}>
                {addressFirstLine} <br />
                {addressSecondLine}
              </p>
            </div>
            <div className={'contact__segment'}>
              <Phone className={'contact__icon'} />
              <p className={'contact__data'}>
                {phoneNumber}
              </p>
            </div>
            <div className={'contact__segment'}>
              <Facebook className={'contact__icon'} />
              <p className={'contact__data'}>
                {facebookName}
              </p>
            </div>
            <div className={'contact__segment'}>
              <Mail className={'contact__icon'} />
              <p className={'contact__data'}>
                {mail}
              </p>
            </div>
            <div className={'contact__segment'}>
              <Info className={'contact__icon'} />
              <p className={'contact__data'}>
                {companyInfoFirstLine}<br />
                {companyInfoSecondLine}<br />
                {companyInfoThirdLine}<br />
              </p>
            </div>
          </div>
        </div>

      </div>
    </StripeContainer>
  );
};

export default Contact;
