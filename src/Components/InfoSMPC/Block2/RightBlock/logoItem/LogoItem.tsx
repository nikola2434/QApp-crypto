import { FC } from 'react';
import style from './LogoItem.module.scss';

export const LogoItem: FC<{ logo: string }> = ({ logo }) => {
  return (
    <div className={style.image}>
      <img src={logo} alt="сбербанк" loading="lazy" draggable={false} />
    </div>
  );
};
