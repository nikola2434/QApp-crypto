import { FC } from 'react';
import style from './Preview.module.scss';
import { Logos } from './Logos';
import { Title } from './Title';
import BgProtocol from '@public/images/bg_preview.svg';
import Logo from '@public/images/logo.svg';

export const Preview: FC = () => {
  return (
    <div className={style.preview}>
      <div className={style.back}>
        <div className={style.logo}>
          <Logo />
        </div>
        <div className={style.image}>
          <BgProtocol />
        </div>
      </div>
      <Logos />
      <Title />
    </div>
  );
};
