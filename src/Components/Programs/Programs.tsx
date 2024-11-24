import { Header } from '@UI/Header';

import style from './Programs.module.scss';
import { Timeline } from './Timeline';
import { Mark } from '@UI/Mark';

export const Programs = () => {
  return (
    <section className={style.programs}>
      <div className={style.rect}></div>
      <Header>
        <Mark vector="3">Программа</Mark>
      </Header>
      <h2>Четверг, 5 декабря</h2>

      <Timeline />
    </section>
  );
};
