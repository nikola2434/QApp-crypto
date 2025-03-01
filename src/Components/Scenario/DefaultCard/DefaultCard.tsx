import { FC, ReactNode } from 'react';
import style from './DefaultCard.module.scss';

interface DefaultCardProps {
  num: ReactNode;
  numText: ReactNode;
  text: ReactNode;
}

export const DefaultCard: FC<DefaultCardProps> = ({ num, numText, text }) => {
  return (
    <div className={style.card}>
      <h2 className={style.num}>
        <div>{num}</div>
        <span>{numText}</span>
      </h2>
      <p>{text}</p>
    </div>
  );
};
