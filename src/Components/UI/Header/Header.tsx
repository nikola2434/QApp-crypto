import { FC, PropsWithChildren } from 'react';
import style from './Header.module.scss';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return <h1 className={style.header}>{children}</h1>;
};
