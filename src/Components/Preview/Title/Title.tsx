import { Button } from '@UI/Button';
import { Tag } from './Tag';
import style from './Title.module.scss';

export const Title = () => {
  return (
    <div className={style.info}>
      <div className={style.tags}>
        <Tag>5 декабря, 15:40</Tag>
        <Tag>2-я Бауманская ул., 5/10, Аудитория 120Т</Tag>
        <Tag>Офлайн</Tag>
      </div>
      <h1>
        Конфиденциальные <br /> вычисления <strong>meetup</strong>
      </h1>
      <Button text="Участие бесплатно">Зарегистрироваться</Button>
    </div>
  );
};
