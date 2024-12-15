import { FC } from 'react';

import style from './FotoItem.module.scss';

export const FotoItem: FC<{ img: string; alt: string }> = ({ alt, img }) => {
  return (
    <div className={style.item}>
      <img src={img} alt={alt} draggable="false" loading="lazy" />
    </div>
  );
};
