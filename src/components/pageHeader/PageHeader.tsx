import React, { FC } from 'react';

import './PageHeader.scss';

interface IPageHeader {
  content: string;
  color: string;
}

export const PageHeader: FC<IPageHeader> = (props) => {
  const { content, color } = props;

  return (
    <h1 style={{ color }} className={'page-header'}>{content}</h1>
  );
};

export default React.memo(PageHeader);
