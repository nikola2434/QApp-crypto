import { FC, PropsWithChildren, ReactNode } from 'react';
import style from './Expert.module.scss';

interface ExpertProps {
  img: string;
  title: string;
}

export const Expert: FC<PropsWithChildren<ExpertProps>> = ({ img, title, children }) => {
  return (
    <div className={style.card}>
      <div className={style.image}>
        <img src={img} alt={`${title} (${children})`} draggable="false" />
      </div>
      <div className={style.container}>
        <h3>{title}</h3>
        <span>{children}</span>
      </div>
    </div>
  );
};
