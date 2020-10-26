import React, { FC } from 'react';

import HeroHeader from '../heroHeader/HeroHeader';

import heroImg from '../../assets/images/aboutHeroImg.jpg';
import './About.scss';
import StripeContainer from '../stripeContainer/StripeContainer';


const About: FC = (props) => {

  return (
    <StripeContainer isLight={true}>
      <section className={'about'}>
        <HeroHeader
          imageSrc={heroImg}
          objectPosition={{ x: '50%', y: '20%' }}
          title={'O nas'}
        />

        <div className={`about__content`}>
          <h2 className={'about__header'}>
            Gazdówka na Wierchu, to nowo wybudowany obiekt, usytuowany w Białym Dunajcu w dzielnicy Tatary, oddany do
            państwa dyspozycji jesienią 2020r.
          </h2>
          <p className={'about__text'}>
            Z dala od zgiełku i hałasu. Otoczona jest malowniczymi polami, a zza okien rozpościera się piękny widok na
            Tatry Wysokie i Zachodnie.
          </p>

          <p className={'about__text'}>
            Nasza Gazdówka znajduje na wysokości 900m n.p.m. W okresie zimowym zaleca się używanie łańcuchów na koła lub
            napędu 4x4.
          </p>
          <p className={'about__text about__text-space'}>
            Dom umiejscowiony jest nad wyciągiem narciarskim Toko-Land – 2min.
          </p>
          <p className={'about__text'}>
            Na naszych Gości czekają piękne pokoje; 2 -, 3 – i 4 – osobowe, a w niedalekiej
            przyszłości do dyspozycji Gości będzie udostępniony apartament dwupokojowy.
          </p>
          <ul className={'about__list'}>
            <span className={'about__text-bold'}>W każdym pokoju znajduje się:</span>
            <li className={'about__item'}>
              Łazienka z prysznicem
            </li>
            <li className={'about__item'}>
              TV
            </li>
            <li className={'about__item'}>
              Darmowe Wi-Fi
            </li>
          </ul>

          <ul className={'about__list'}>
            <span className={'about__text-bold'}>W obiekcie znajduje się:</span>
            <li className={'about__item'}>
              Aneks kuchenny z lodówką
            </li>
            <li className={'about__item'}>
              Sala do ping-ponga
            </li>
            <li className={'about__item'}>
              Na naszych milusińskich
              czeka kącik z zabawkami
            </li>
            <li className={'about__item'}>
              Monitorowany parking
            </li>
          </ul>

          <ul className={'about__list'}>
            <span className={'about__text-bold'}>W ogrodzie do dyspozycji Gości znajduje się:</span>
            <li className={'about__item'}>
              Altanka
            </li>
            <li className={'about__item'}>
              Miejsce na ognisko i grill
            </li>
            <li className={'about__item'}>
              Duża huśtawka
            </li>
            <li className={'about__item'}>
              W okresie letnim relaksując się możecie podziwiać piękno naszych gór korzystając z leżaków, które
              udostępnimy
              dla Was.
            </li>
          </ul>

          <p className={'about__text'}>
            W Gazdówce na Wierchu panuje ciepła i przyjazna atmosfera. Nasi goście poznają smak dobrej domowej kuchni.
            Oferujemy swojskie, zdrowe wyroby. Sami pieczemy chleby a z przydomowej wędzarni wszyscy będą mogli
            zasmakować wędzonych kiełbas i szynek. Stawiamy na zdrową, naturalną i regionalną kuchnię.
          </p>
          <h3 className={'about__header'}>Atrakcje w okolicy:</h3>

          <ul className={'about__list'}>
            <li className={'about__item'}>
              Wyciągi narciarskie - swoje miejsce znajdą tutaj początkujący narciarze jak również profesjonaliści. W
              okolicy funkcjonuje wiele tras i wyciągów narciarskich:
              <ul className={'about__sub-list'}>
                <li className={'about__sub-item'}>Tokoland – Bialy Dunajec: <span
                  className={'about__text-bold'}>2min</span></li>
                <li className={'about__sub-item'}>Stacja Narciarska Ski-Suche: <span
                  className={'about__text-bold'}>1,8 km</span></li>
                <li className={'about__sub-item'}>oraz wiele innych miedzy innymi w <span
                  className={'about__text-bold'}>Gliczarowie, Białce Tatrzańskiej i Bukowinie.</span>
                </li>
              </ul>
            </li>
            <li className={'about__item'}>
              Baseny Termalne - na Podhalu funkcjonuje kilka obiektów z wodnymi atrakcjami:
              <ul className={'about__sub-list'}>
                <li className={'about__sub-item'}>Termy Podhalańskie oraz Gorący Potok w Szaflarach – <span
                  className={'about__text-bold'}>6km</span>
                </li>
                <li className={'about__sub-item'}>Zakopane Termy Chochołowskie – <span
                  className={'about__text-bold'}>8km</span></li>
                <li className={'about__sub-item'}>Termy Bukowina Tatrzańska – <span
                  className={'about__text-bold'}>12km</span></li>
                <li className={'about__sub-item'}>Termy Białka Tatrzańska – <span
                  className={'about__text-bold'}>18km</span></li>
              </ul>
            </li>
            <li className={'about__item'}>
              Szlaki - Gazdówka na Wierchu, to świetna baza wypadowa na tatrzańskie szlaki.
            </li>
          </ul>
          <p className={'about__text'}>Podhale to miejsce dla wszystkich. Aktywnych bardziej i mniej, starszych,
            młodszych
            oraz dzieci. Gór jest dużo, szlaki są zróżnicowane, każdy spędzi tutaj cudowny czas.</p>

          <div className={'about__ending'}>
            <p className={'about__ending-content'}>
              Zapraszamy,<br />
              Marzena i Krzysztof,<br />
              Gazdówka na Wierchu
            </p>
          </div>
        </div>
      </section>
    </StripeContainer>
  );
};

export default About;
