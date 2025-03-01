import { FC } from 'react';
import Vector3 from '@public/figures/vector3.svg';
import Vector4 from '@public/figures/vector4.svg';
import Vector5 from '@public/figures/vector5.svg';

import style from './ActiveCard.module.scss';

export const ActiveCard: FC = () => {
  return (
    <div className={style.card}>
      <h3>
        Карьера <br />в QApp
      </h3>

      <div className={style.vector4}>
        <Vector4 />
      </div>

      <div className={style.vector3}>
        <Vector3 />
      </div>
      <div className={style.vector5}>
        <Vector5 />
      </div>

      <p>
        Расскажем о возможностях стажировки и фултайм работы у разработчиков программных решений для кибербезопасности
      </p>
    </div>
  );
};
