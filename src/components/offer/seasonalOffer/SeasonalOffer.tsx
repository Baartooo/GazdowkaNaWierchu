import React, { FC } from 'react';
import CTAButton from '../../ctaButton/CTAButton';
import { graphql, useStaticQuery } from 'gatsby';


import offer from '../../../../static/ofertaSpecjalna2020.pdf';
import './SeasonalOffer.scss';

const SeasonalOffer: FC = (props) => {

  const { contentfulOfertaSpecjalna } = useStaticQuery(
    graphql`
query offer {
  contentfulOfertaSpecjalna {
    oferta {
      file {
        url
      }
    }
  }
}
   `);

  return (
    <div className={'seasonal'} id={'seasonal'}>
      <h2 className={'seasonal__header'}>Oferta specjalna</h2>

      <div className={'seasonal__description'}>
        <span className={'seasonal__description-header'}>
          W naszej Gazdówce organizujemy również:
        </span>

        <ul className={'seasonal__offer'}>
          <li className={'seasonal__offer-item'}>Andrzejki</li>
          <li className={'seasonal__offer-item'}>Święta Bożego Narodzenia</li>
          <li className={'seasonal__offer-item'}>Sylwester</li>
          <li className={'seasonal__offer-item'}>Ferie</li>
          <li className={'seasonal__offer-item'}>Wielkanoc</li>
          <li className={'seasonal__offer-item'}>majówkę</li>
        </ul>

        <span className={'seasonal__download-title'}>Pobierz aktualną ofertę specjalną</span>

        <a className={'seasonall__download-link'} href={contentfulOfertaSpecjalna.oferta.file.url} target={'_blank'}>
          <CTAButton>
            Oferta specjalna
          </CTAButton>
        </a>

      </div>

    </div>
  );
};
export default SeasonalOffer;
