import { FC, PropsWithChildren } from 'react';
import style from './Button.module.scss';

export const Button: FC<PropsWithChildren<{ size?: 'md' | 'lg'; text: string }>> = ({
  children,
  size = 'md',
  text,
}) => {
  return (
    <div className={style.btn}>
      <a className={style[`link__${size}`]}>{children}</a>
      <span>{text}</span>
    </div>
  );
};
