import { FC } from 'react';
import style from './Preview.module.scss';
import { Logos } from './Logos';
import { Title } from './Title';
import BgProtocol from '@public/images/bg_preview.webp';
import Logo from '@public/images/logo.webp';

export const Preview: FC = () => {
  return (
    <div className={style.preview} id="preview">
      <div className={style.back}>
        <div className={style.logo}>
          <img src={Logo} alt="" draggable={false} loading="lazy" />
        </div>
        <div className={style.image}>
          <img src={BgProtocol} alt="" draggable={false} loading="lazy" />
        </div>
      </div>
      <Logos />
      <Title />
    </div>
  );
};
