import React, { FC, useEffect, useState } from 'react';

import HeroHeader from '../heroHeader/HeroHeader';
import Loader from 'react-loader-spinner';

import heroImg from '../../assets/images/aboutHeroImg.jpg';
import './About.scss';
import StripeContainer from '../stripeContainer/StripeContainer';


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
        <h2 className={'about__header'}>
          Gazdówka na Wierchu, to nowo wybudowany obiekt, usytuowany w Białym Dunajcu w dzielnicy Tatary, oddany do
          państwa dyspozycji jesienią 2020r.
        </h2>
        <p className={'about__text'}>
          Z dala od zgiełku i hałasu. Otoczona jest malowniczymi polami a zza okien rozpościera się piękny widok na
          Tatry Wysokie i Zachodnie.
        </p>

        <p className={'about__text'}>
          Nasza Gazdówka znajduje na wysokości 900m n.p.m. W okresie zimowym zaleca się używanie łańcuchów na koła lub
          napędu 4x4.
        </p>
        <p className={'about__text'}>
          Dom umiejscowiony jest nad wyciągiem narciarskim Toko-Land – 2min.
        </p>
        <p className={'about__text'}>
          Na naszych Gości czekają piękne pokoje; 2 -, 3 – i 4 – osobowe, a w niedalekiej
          przyszłości do dyspozycji Gości będzie udostępniony apartament dwupokojowy.
        </p>
        <p className={'about__text'}>
          W każdym pokoju znajduje się łazienka z prysznicem oraz TV.
        </p>
        <p className={'about__text'}>
          Goście Gazdówki maja zapewniony dostęp do darmowego Wi-Fi oraz monitorowanego parkingu.
        </p>
        <p className={'about__text'}>
          W obiekcie znajduje się wyposażony aneks kuchenny z lodówką, sala do ping-ponga a na naszych milusińskich
          czeka kącik z zabawkami.
        </p>
        <p className={'about__text'}>
          W ogrodzie do dyspozycji Gości znajduje się altanka, miejsce na ognisko i grill oraz duża huśtawka, a w
          okresie letnim relaksując się możecie podziwiać piękno naszych gór korzystając z leżaków, które udostępnimy
          dla Was.
        </p>
        <p className={'about__text'}>
          W Gazdówce na Wierchu panuje ciepła i przyjazna atmosfera. Nasi goście poznają smak dobrej domowej kuchni.
          Oferujemy swojskie, zdrowe wyroby. Sami pieczemy chleby a z przydomowej wędzarni wszyscy będą mogli
          zasmakować wędzonych kiełbas i szynek. Stawiamy na zdrową, naturalną i regionalną kuchnię.
        </p>
        <h3 className={'about__header'}>Atrakcje w okolicy:</h3>

        <ul className={'about__attractions'}>
          <li>
            Wyciągi narciarskie - swoje miejsce znajdą tutaj początkujący narciarze jak również profesjonaliści. W
            okolicy funkcjonuje wiele tras i wyciągów narciarskich:
            <ul className={'about__sub-list'}>
              <li>Tokoland – Bialy Dunajec: <span className={'about__text-bold'}>2min</span></li>
              <li>Stacja Narciarska Ski-Suche: <span className={'about__text-bold'}>1,8 km</span></li>
              <li>oraz wiele innych miedzy innymi w <span className={'about__text-bold'}>Gliczarowie, Białce Tatrzańskiej i Bukowinie.</span>
              </li>
            </ul>
          </li>
          <li>
            Baseny Termalne - na Podhalu funkcjonuje kilka obiektów z wodnymi atrakcjami:
            <ul className={'about__sub-list'}>
              <li>Termy Podhalańskie oraz Gorący Potok w Szaflarach – <span className={'about__text-bold'}>6km</span>
              </li>
              <li>Zakopane Termy Chochołowskie – <span className={'about__text-bold'}>8km</span></li>
              <li>Termy Bukowina Tatrzańska – <span className={'about__text-bold'}>12km</span></li>
              <li>Termy Białka Tatrzańska – <span className={'about__text-bold'}>18km</span></li>
            </ul>
          </li>
          <li>
            Szlaki - Gazdówka na Wierchu, to świetna baza wypadowa na tatrzańskie szlaki.
          </li>
        </ul>
        <p className={'about__text'}>Podhale to miejsce dla wszystkich. Aktywnych bardziej i mniej, starszych, młodszych
          oraz dzieci. Gór jest dużo, szlaki są zróżnicowane, każdy spędzi tutaj cudowny czas.</p>

        <div className={'about__ending'}>
          <p className={'about__ending-content'}>
            Zapraszamy,<br />
            Marzena i Krzysztof,<br />
            Gazdówka na Wierchu
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
