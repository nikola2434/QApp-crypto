import { FC } from 'react';
import style from './Preview.module.scss';
import { Logos } from './Logos';
import { Title } from './Title';
import BgProtocol from '@public/images/bg_preview.png';
import Logo from '@public/images/logo.png';

export const Preview: FC = () => {
  return (
    <div className={style.preview}>
      <div className={style.back}>
        <img src={Logo} alt="" className={style.logo} draggable={false} />
        <img src={BgProtocol} alt="" className={style.image} draggable={false} />
      </div>
      <Logos />
      <Title />
    </div>
  );
};
