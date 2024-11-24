import style from './Tag.module.scss';
import { FC, PropsWithChildren } from 'react';

export const Tag: FC<PropsWithChildren> = ({ children }) => {
  return <span className={style.tag}>{children}</span>;
};
