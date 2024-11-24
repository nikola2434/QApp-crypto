import { Task } from './Task';
import Icon1 from '@public/icons/icon1.svg';
import Icon2 from '@public/icons/icon2.svg';
import Icon3 from '@public/icons/icon3.svg';
import Icon4 from '@public/icons/icon4.svg';
import { Spher } from './Spher';

import style from './RightBlock.module.scss';

export const RightBlock = () => {
  return (
    <div className={style.right}>
      <div className={style.container_tasks}>
        <Task icon={<Icon1 />}>Статистика с сохранением конфиденциальности</Task>
        <Task icon={<Icon4 />}>Распределённые вычисления</Task>
        <Task icon={<Icon2 />}>Электронное голосование</Task>
        <Task icon={<Icon3 />}>Электронные аукционы</Task>
      </div>

      <h4>Сферы применения</h4>

      <div className={style.spheres}>
        <Spher>Банки</Spher>
        <Spher>Кредитное бюро</Spher>
        <Spher>Нефтегаз</Spher>
        <Spher>Медицина</Spher>
        <Spher>Недвижимость</Spher>
        <Spher>...</Spher>
      </div>
    </div>
  );
};
