import { FC, ReactElement } from 'react';
import style from './LogoItem.module.scss';

export const LogoItem: FC<{ logo: ReactElement }> = ({ logo }) => {
  return <div className={style.image}>{logo}</div>;
};
