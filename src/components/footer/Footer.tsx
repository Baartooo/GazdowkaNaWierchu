import React, { FC } from 'react';
import info from '../../company-info/info.json';

import Facebook from '../../assets/svg/facebook.svg';
import Mail from '../../assets/svg/mail.svg';
import Pin from '../../assets/svg/pin.svg';
import Info from '../../assets/svg/info.svg';
import './Footer.scss';

const Footer: FC = (props) => {

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
  } = info;

  return (
    <footer className={'footer'}>

      <div className={'footer__item-wrapper'}>
        <a href={facebookLink} className={'footer__link'}>
          <img src={Facebook} className={'footer__icon'} />
          <div className={'footer__info'}>
            {facebookName}
          </div>
        </a>
      </div>

      <div className={'footer__item-wrapper'}>
        <a href={`mailto:${mail}`} className={'footer__link'}>
          <img src={Mail} className={'footer__icon'} />
          <div className={'footer__info'}>
            {mail}
          </div>
        </a>
      </div>

      <div className={'footer__item-wrapper'}>
        <a href={addressLink} className={'footer__link'}>
          <img src={Pin} className={'footer__icon'} />
          <div className={'footer__info footer__info--smaller'}>
            {addressFirstLine} <br />
            {addressSecondLine}
          </div>
        </a>
      </div>

      <div className={'footer__item-wrapper'}>
        <a href={'#'} className={'footer__link'}>
          <img src={Info} className={'footer__icon'} />
          <div className={'footer__info footer__info--smaller'}>
            {companyInfoFirstLine}<br />
            {companyInfoSecondLine}<br />
            {companyInfoThirdLine}<br />
          </div>
        </a>
      </div>

    </footer>
  );
};

export default React.memo(Footer);
