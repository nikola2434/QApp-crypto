import { Task } from './Task';
import Icon1 from '@public/icons/icon-1.svg';
import Icon2 from '@public/icons/icon-2.svg';
import Icon3 from '@public/icons/icon-3.svg';
import Icon4 from '@public/icons/icon-4.svg';

import Logo1 from '@public/images/logos/logo-1.svg';
import Logo2 from '@public/images/logos/logo-2.svg';
import Logo3 from '@public/images/logos/logo-3.svg';
import Logo4 from '@public/images/logos/logo-4.svg';
import Logo5 from '@public/images/logos/logo5.svg';
import Logo6 from '@public/images/logos/logo-6.svg';
import Logo7 from '@public/images/logos/logo-7.svg';
import Logo8 from '@public/images/logos/logo-8.svg';

import style from './RightBlock.module.scss';
import { LogoItem } from './logoItem';

export const RightBlock = () => {
  return (
    <div className={style.right}>
      <div className={style.container_tasks}>
        <Task IconCard={<Icon1 />}>
          В России завершены <br />
          десятĸи пилотных проеĸтов
        </Task>
        <Task IconCard={<Icon2 />}>&gt;5 отечественных программных продуĸтов разработано</Task>
        <Task IconCard={<Icon3 />}>Проектируются новые государственные стандарты</Task>
        <Task IconCard={<Icon4 />}>Появились первые открытые реализации постквантовых алгоритмов</Task>
      </div>

      <h4>Пилотируют и исследуют</h4>

      <div className={style.logos}>
        <LogoItem logo={<Logo1 />} />
        <LogoItem logo={<Logo2 />} />
        <LogoItem logo={<Logo3 />} />
        <LogoItem logo={<Logo4 />} />
        <LogoItem logo={<Logo5 />} />
        <LogoItem logo={<Logo6 />} />
        <LogoItem logo={<Logo7 />} />
        <LogoItem logo={<Logo8 />} />
      </div>
    </div>
  );
};
