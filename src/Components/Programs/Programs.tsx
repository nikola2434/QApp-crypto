import { Header } from '@UI/Header';

import style from './Programs.module.scss';
import { Timeline } from './Timeline';

export const Programs = () => {
  return (
    <section className={style.programs} id="program">
      <div className={style.rect}></div>
      <Header>Программа</Header>
      <h2>10 марта, 15:40 – 18:30</h2>

      <div className={style.container}>
        <Timeline />
      </div>
    </section>
  );
};
