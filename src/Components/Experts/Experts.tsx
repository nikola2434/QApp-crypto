import { Header } from '@UI/Header';
import { Expert } from './Expert';
import Expert3 from '@public/images/expert3.png';
import Expert2 from '@public/images/expert2.png';
import Expert1 from '@public/images/expert1.png';

import style from './Experts.module.scss';

export const Experts = () => {
  return (
    <section className={style.experts}>
      <Header>Эксперты</Header>
      <div className={style.container_experts}>
        <Expert img={Expert3} title="Антон Гугля">
          Генеральный директор QApp
        </Expert>
        <Expert img={Expert2} title="Максим Кот">
          Руководитель разработки <span>в QApp</span>
        </Expert>
        <Expert img={Expert1} title="Егор Сабитов">
          Ведущий исследователь <span>в QApp</span>
        </Expert>
      </div>
    </section>
  );
};
