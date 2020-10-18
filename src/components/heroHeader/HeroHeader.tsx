import React, { FC } from 'react';

import './HeroHeader.scss';
import PageHeader from '../pageHeader/PageHeader';

interface IObjectPosition {
  x: string;
  y: string;
}

interface IHeroHeader {
  imageSrc: string;
  objectPosition: IObjectPosition;
  title: string;
  isVisible: boolean;

  checkInLoaded(): void;
}

const HeroHeader: FC<IHeroHeader> = (props) => {
  const {
    imageSrc,
    objectPosition,
    title,
    isVisible,
    checkInLoaded,
  } = props;

  return (
    <div className={`hero ${isVisible ? 'visible' : ''}`}>
      <img
        style={{
          objectPosition: `${objectPosition.x}
         ${objectPosition.y}`,
        }} className={'hero__image'}
        src={imageSrc}
        onLoad={checkInLoaded} />
      <PageHeader content={title} />
    </div>
  );
};

export default HeroHeader;
