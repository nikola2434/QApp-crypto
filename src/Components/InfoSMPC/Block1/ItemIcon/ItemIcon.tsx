import { FC } from 'react';
import style from './ItemIcon.module.scss';

export const ItemIcon: FC<{ icon: string }> = ({ icon }) => {
  return (
    <div className={style.block}>
      <div className={style.container}>
        <img src={icon} alt="" draggable={false} loading="lazy" />
      </div>
    </div>
  );
};
