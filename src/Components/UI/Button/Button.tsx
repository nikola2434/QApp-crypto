import { FC, PropsWithChildren } from 'react';
import style from './Button.module.scss';

export const Button: FC<PropsWithChildren<{ size?: 'md' | 'lg'; text: string }>> = ({
  children,
  size = 'md',
  text,
}) => {
  return (
    <div className={style.btn}>
      <a className={style[`link__${size}`]} href="https://forms.yandex.ru/u/67c063c302848fe27524f9d8/" target="_blank">
        <span className={style.active_children}>{children}</span>
        <span className={style.hover_children}>{children}</span>
      </a>
      <span>{text}</span>
    </div>
  );
};
