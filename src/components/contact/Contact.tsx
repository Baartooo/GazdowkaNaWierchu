import React, { FC, useEffect, useState } from 'react';
import info from '../../company-info/info.json';
import HeroHeader from '../heroHeader/HeroHeader';
import StripeContainer from '../stripeContainer/StripeContainer';

import Loader from 'react-loader-spinner';

import card from '../../assets/images/businessCard.jpg';
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
      <section className={'contact'}>
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
            <a href={addressLink} className={'contact__segment'} target={'_blank'}>
              <Pin className={'contact__icon'} />
              <p className={'contact__data'}>
                {addressFirstLine} <br />
                {addressSecondLine}
              </p>
            </a>
            <a href={`tel:${phoneNumber}`} className={'contact__segment'}>
              <Phone className={'contact__icon'} />
              <p className={'contact__data'}>
                {phoneNumber}
              </p>
            </a>
            <a href={facebookLink} className={'contact__segment'} target={'_blank'}>
              <Facebook className={'contact__icon'} />
              <p className={'contact__data'}>
                {facebookName}
              </p>
            </a>
            <a href={`mailto:${mail}`} className={'contact__segment'} target={'_blank'}>
              <Mail className={'contact__icon'} />
              <p className={'contact__data'}>
                {mail}
              </p>
            </a>
            <div className={'contact__segment'}>
              <Info className={'contact__icon'} />
              <p className={'contact__data'}>
                {companyInfoFirstLine}<br />
                {companyInfoSecondLine}<br />
                {companyInfoThirdLine}<br />
              </p>
            </div>
          </div>
          <div className={'contact__business-card'}>
            <img src={card} className={'contact__card'}/>
          </div>

          <div className={'contact__map'}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3170.980236521027!2d19.98686081586652!3d49.35114217383817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715f19e3d7fc98d%3A0x15519f08d2f1b47c!2sGazd%C3%B3wka%20na%20Wierchu!5e1!3m2!1spl!2spl!4v1603465684806!5m2!1spl!2spl"
              width="100%" height="100%" frameBorder="0" aria-hidden="false"
              tabIndex="0" />
          </div>

        </div>
      </section>
    </StripeContainer>
  );
};

export default Contact;
