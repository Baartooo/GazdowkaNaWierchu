import React, { FC } from 'react';

import './Gallery.scss';
import { PageHeader } from '../pageHeader/PageHeader';

export const Gallery: FC = (props) => {

  return (
    <div className={'gallery'}>
      <PageHeader content={'Galeria'} />


    </div>
  );
};
