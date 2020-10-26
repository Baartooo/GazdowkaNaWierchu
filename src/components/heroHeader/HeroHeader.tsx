import React, { FC } from 'react';
import PageHeader from '../pageHeader/PageHeader';

import './HeroHeader.scss';

interface IObjectPosition {
  x: string;
  y: string;
}

interface IHeroHeader {
  imageSrc: string;
  objectPosition: IObjectPosition;
  title: string;
}

const HeroHeader: FC<IHeroHeader> = (props) => {
  const {
    imageSrc,
    objectPosition,
    title,
  } = props;

  return (
    <div className={`hero`}>
      <img
        style={{
          objectPosition: `${objectPosition.x}
         ${objectPosition.y}`,
        }}
        className={'hero__image'}
        src={imageSrc}
        title={'Tatry'}
        alt={'Tatry'}
      />
      <PageHeader content={title} />
    </div>
  );
};

export default HeroHeader;
