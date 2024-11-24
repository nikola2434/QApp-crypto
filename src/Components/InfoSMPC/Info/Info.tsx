import { Header } from '@UI/Header';
import { Mark } from '@UI/Mark';

import style from './Info.module.scss';

export const Info = () => {
  return (
    <div className={style.info}>
      <Header>О технологии {<Mark vector="1">SMPC</Mark>}</Header>
      <p>
        Secure multi-party computation — протокол конфиденциальных вычислений. Подходит для любых задач, где необходимо
        произвести безопасные вычисления для двух и более сторон
      </p>
    </div>
  );
};
