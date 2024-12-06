import Vector3 from '@public/figures/vector3.svg';
import Vector4 from '@public/figures/levin.svg';
import Vector5 from '@public/figures/vector5.svg';
import Random from '@public/images/random.png';

import style from './Column.module.scss';

export const Column1 = () => {
  return (
    <div className={style.column}>
      <div className={style.block_1}>
        <div className={style.image}>
          <img src={Random} alt="Карьера в QApp" draggable={false} loading="lazy" />
        </div>
        <div className={style.vector4}>
          <Vector5 />
        </div>

        <div className={style.vector3}>
          <Vector3 />
        </div>
      </div>

      <div className={style.block_2}>
        <h3>
          Рок-звезды
          <br />в мире ученых
        </h3>
        <p>
          Двое экспертов команды стали финалистами рейтинга Forbes <span>«30 до 30»</span> в номинации{' '}
          <span>«Наука и технологии»</span>
        </p>
        <div className={style.vector_5}>
          <Vector4 />
        </div>
      </div>
    </div>
  );
};
