import { Button } from '@UI/Button';
import { Tag } from './Tag';
import Geo from '@public/figures/geo.svg';

import style from './Title.module.scss';

export const Title = () => {
  return (
    <div className={style.info}>
      <div className={style.tags}>
        <Tag>5 декабря, 15:40</Tag>
        <Tag>2-я Бауманская ул., 5/10, Аудитория 120Т</Tag>
        <Tag>Офлайн + трансляция</Tag>
      </div>
      <h1>
        Конфиденциальные <br /> вычисления <strong>meetup</strong>
      </h1>
      {/* <div className={style.btn}>
        <a className={style[`link__md`]} href="https://forms.yandex.ru/u/673d9a0cd04688885cae3421/" target="_blank">
          <span className={style.active_children}>Зарегистрироваться</span>
          <span className={style.hover_children}>Зарегистрироваться</span>
        </a>
        <span>Участие бесплатно</span>
      </div> */}
    </div>
  );
};
