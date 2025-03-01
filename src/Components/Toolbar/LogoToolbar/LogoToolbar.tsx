import { FC } from 'react';
import style from './LogoToolbar.module.scss';

export const LogoToolbar: FC = () => {
  return (
    <a className={style.logo} href='#preview'>
      Постквантовая
      <br /> криптография <strong>meetup</strong>
    </a>
  );
};
