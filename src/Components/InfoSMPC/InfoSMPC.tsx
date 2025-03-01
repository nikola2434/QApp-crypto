import style from './InfoSMPC.module.scss';
import { Block2 } from './Block2';
import { Header } from '@UI/Header';
import { Block1 } from './Block1';
import { Block3 } from './Block3';

export const Info = () => {
  return (
    <section className={style.info} id="info">
      <Header>О технологии</Header>
      <Block1 />
      <Block2 />
      <Block3 />
    </section>
  );
};
