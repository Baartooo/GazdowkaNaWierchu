import React, { FC } from 'react';

import './PageHeader.scss';

interface IPageHeader {
  content: string;
}

export const PageHeader: FC<IPageHeader> = (props) => {
  const { content } = props;

  return (
    <h1 className={'page-header'}>{content}</h1>
  );
};

export default React.memo(PageHeader)
