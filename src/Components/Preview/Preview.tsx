import { FC } from 'react';
import style from './Preview.module.scss';
import { Logos } from './Logos';
import { Title } from './Title';

export const Preview: FC = () => {
  return (
    <div className={style.preview}>
      <Logos />
      <Title />
    </div>
  );
};
