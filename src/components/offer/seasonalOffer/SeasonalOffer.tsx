import React, { FC } from 'react';

import './SeasonalOffer.scss';

const SeasonalOffer: FC = (props) => {


  return (
    <div className={'seasonal'} id={'seasonal'}>
      <h2 className={'seasonal__header'}>Oferta sezonowa</h2>

      <div className={'seasonal__description'}>
        <span className={'seasonal__description-header'}>
          W naszej Gazdówce organizujemy również:
        </span>

        <ul className={'seasonal__offer'}>
          <li className={'seasonal__offer-item'}>Andrzejki</li>
          <li className={'seasonal__offer-item'}>Święta Bożego Narodzenia</li>
        </ul>

        <span className={'seasonal__download-title'}>Pobierz aktualną ofertę sezonową</span>
        <div className={'seasonal__donwload-button'}>
          Oferta sezonowa
        </div>
      </div>

    </div>
  );
};
export default SeasonalOffer;
