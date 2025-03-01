import { Tag } from './Tag';

import style from './Title.module.scss';

export const Title = () => {
  return (
    <div className={style.info}>
      <div className={style.tags}>
        <Tag>10 Марта, 15:40</Tag>
        <Tag>2-я Бауманская ул., 5/10, Аудитория 120Т</Tag>
        <Tag>Офлайн + трансляция</Tag>
      </div>
      <h1>
        Постквантовая <br /> криптография <strong>meetup</strong>
      </h1>

      <span>
        Защита данных от ĸибератаĸ <br />
        настоящего и ближайшего будущего
      </span>

      <div className={style.btn}>
        <a href="https://forms.yandex.ru/u/673d9a0cd04688885cae3421/" target="_blank" rel="noopener noreferrer">
          Зарегистрироваться
        </a>
        <span>Участие бесплатно</span>
      </div>
    </div>
  );
};
