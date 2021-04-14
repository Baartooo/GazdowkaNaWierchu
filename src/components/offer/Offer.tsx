import React, { FC, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

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
  const {
    contentfulRegulamin,
    contentfulCennikPricesListContentRichTextNode: pricesList,
  } = useStaticQuery(
    graphql`
        query terms {
            contentfulRegulamin {
                terms {
                    file {
                        url
                    }
                }
            }
            contentfulCennikPricesListContentRichTextNode {
                id
                json
            }
        }
    `);

  const refPrices = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollToPlugin);

  const scrollToConstant = () => {
    if (typeof window !== 'undefined' && refPrices.current) {

      const pos = refPrices.current.offsetTop - 60;

      gsap.to(window, {
        scrollTo: pos,
        duration: 1,
      });
    }
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

          <div className={'offer__common'} id={'constant'} ref={refPrices}>
            <h1 className={'offer__title'}>Cennik</h1>
            {
              pricesList.json.content.map((p, i: number) => {
                return <p className={'offer__paragraph'} key={i}>
                  {
                    p.content.map(line => {
                      return <span dangerouslySetInnerHTML={{ __html: line.value }} />;
                    })
                  }
                </p>;
              })
            }
          </div>

          <p className={'offer__terms'}>Pobierz regulamin obiektu</p>
          <a className={'offer__terms-link'} href={contentfulRegulamin.terms.file.url} target={'_blank'}>
            <CTAButton>Regulamin</CTAButton>
          </a>

          <SeasonalOffer />
          <ConstantOffer />
        </div>

      </section>
    </StripeContainer>
  );
};

