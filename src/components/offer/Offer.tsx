import React, { FC } from 'react';

import { gsap, ScrollToPlugin } from 'gsap/all';
import StripeContainer from '../stripeContainer/StripeContainer';
import OfferNavigation from './navigation/OfferNavigation';
import HeroHeader from '../heroHeader/HeroHeader';
import ConstantOffer from './constantOffer/ConstantOffer';
import SeasonalOffer from './seasonalOffer/SeasonalOffer';
import CTAButton from '../ctaButton/CTAButton';

import terms from '../../../static/regulamin.pdf';
import heroImg from '../../assets/images/offerHeroImage.jpg';
import './Offer.scss';

export const Offer: FC = (props) => {

  gsap.registerPlugin(ScrollToPlugin);


  const scrollToConstant = () => {
    gsap.to(window, {
      scrollTo: '#constant',
      duration: 1,
    });
  };

  const scrollToSeasonal = () => {
    gsap.to(window, {
      scrollTo: '#seasonal',
      duration: 1,
    });
  };

  return (
    <StripeContainer>
      <section className={'offer'}>
        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '45%' }}
          title={'Nasza oferta'}
        />

        <div className={`offer__segments`}>
          <OfferNavigation
            handleConstantClick={scrollToConstant}
            handleSeasonalClick={scrollToSeasonal}
          />

          <div className={'offer__common'}>
            Cena jest uzależniona od sezonu i długości pobytu.<br />
            Cena za pobyt zawiera opłatę klimatyczną.<br />
            Dzieci poniżej 3 lat nieodpłatnie.<br /><br />
            Śniadania wydawane są w godzinach 8.00-10.00.<br />
            Obiadokolacja 17.00-19.00.<br />
          </div>

          <p className={'offer__terms'}>Pobierz regulamin obiektu</p>
          <a className={'offer__terms-link'} href={terms} target={'_blank'}>
            <CTAButton>Regulamin</CTAButton>
          </a>

          <ConstantOffer />
          <SeasonalOffer />
        </div>

      </section>
    </StripeContainer>
  );
};

