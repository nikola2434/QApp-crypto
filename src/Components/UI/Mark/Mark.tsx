import { FC, PropsWithChildren } from 'react';
import Vector1 from '@public/figures/vector1.svg';
import Vector2 from '@public/figures/Vector2.svg';
import Vector6 from '@public/figures/vector6.svg';

import style from './Mark.module.scss';

export const Mark: FC<PropsWithChildren<{ vector?: '1' | '2' | '3' }>> = ({ children, vector = '1' }) => {
  return (
    <strong className={style.text_container}>
      <span>{children}</span>
      <div className={style[`underline_${vector}`]}>
        {vector === '1' ? <Vector1 /> : vector === '2' ? <Vector2 /> : <Vector6 />}
      </div>
    </strong>
  );
};
