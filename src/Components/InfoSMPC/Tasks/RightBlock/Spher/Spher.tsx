import { FC, PropsWithChildren } from 'react';
import style from './Spher.module.scss';

export const Spher: FC<PropsWithChildren> = ({ children }) => {
  return <div className={style.spher}>{children}</div>;
};
