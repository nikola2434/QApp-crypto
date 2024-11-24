import { FC, ReactNode } from 'react';
import style from './DefaultCard.module.scss';

interface DefaultCardProps {
  num: number;
  numText: ReactNode;
  text: ReactNode;
}

export const DefaultCard: FC<DefaultCardProps> = ({ num, numText, text }) => {
  return (
    <div className={style.card}>
      <h2 className={style.num}>
        <strong>{num}</strong>
        <br />
        {numText}
      </h2>
      <p>{text}</p>
    </div>
  );
};
