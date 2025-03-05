import QApp from '@public/icons/QApp.webp';
import Partner from '@public/icons/Partner.webp';
import Noc from '@public/icons/Noc.webp';

import style from './Column2.module.scss';

export const Column2 = () => {
  return (
    <div className={style.column2}>
      <div className={style.header}>
        <img src={QApp} alt="QApp" draggable={false} loading="lazy" />
        <div className={style.sub_logos}>
          <img src={Partner} alt="QApp" draggable={false} loading="lazy" />
          <img src={Noc} alt="QApp" draggable={false} loading="lazy" />
        </div>
      </div>

      <div className={style.container}>
        <h2>Разрабатываем инновационные программные решения кибербезопасности</h2>
        <div className={style.tags}>
          <span className={style.tag}>Прикладные исследования</span>
          <span className={style.tag}>Проектирование алгоритмов</span>
          <span className={style.tag}>Разработка продуктов</span>
          <span className={style.tag}>Пилотирование</span>
        </div>
      </div>
    </div>
  );
};
