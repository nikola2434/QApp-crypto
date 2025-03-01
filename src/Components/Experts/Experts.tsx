import { Header } from '@UI/Header';
import { Expert } from './Expert';
import Expert3 from '@public/images/expert3.webp';
import Expert2 from '@public/images/expert2.webp';
import Expert1 from '@public/images/expert1.webp';

import style from './Experts.module.scss';

export const Experts = () => {
  return (
    <section className={style.experts} id="speakers">
      <Header>Эксперты</Header>
      <div className={style.container}>
        <div className={style.container_experts}>
          <Expert img={Expert1} title="Антон Гугля">
            Генеральный директор QApp,
            <br /> преподаватель кафедры <span>ИУ10 МГТУ им. Н. Э. Баумана</span>
          </Expert>
          <Expert img={Expert2} title="Алексей Зеленецкий">
            <span>Ведущий криптограф-исследователь QApp,</span>
            <br />
            преподаватель кафедры <br />
            <span>ИУ8 МГТУ им. Н. Э. Баумана</span>
          </Expert>
          <Expert img={Expert3} title="Максим Кот">
            Руководитель разработки
            <br /> QApp
          </Expert>
        </div>
      </div>
    </section>
  );
};
