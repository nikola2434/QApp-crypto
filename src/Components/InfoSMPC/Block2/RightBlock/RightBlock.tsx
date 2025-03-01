import { Task } from './Task';
import Icon1 from '@public/icons/icon1.webp';
import Icon2 from '@public/icons/icon2.webp';
import Icon3 from '@public/icons/icon3.webp';
import Icon4 from '@public/icons/icon4.webp';

import logo1 from '@public/images/logos/bank_rf.webp';
import logo2 from '@public/images/logos/gazprom.webp';
import logo3 from '@public/images/logos/sber.webp';
import logo4 from '@public/images/logos/nspk.webp';
import logo5 from '@public/images/logos/moex.webp';
import logo6 from '@public/images/logos/akad.webp';
import logo7 from '@public/images/logos/t1.webp';
import logo8 from '@public/images/logos/web3.webp';

import style from './RightBlock.module.scss';
import { LogoItem } from './logoItem';

export const RightBlock = () => {
  return (
    <div className={style.right}>
      <div className={style.container_tasks}>
        <Task icon={Icon1}>
          В России завершены <br />
          десятĸи пилотных проеĸтов
        </Task>
        <Task icon={Icon2}>&gt;отечественных программных продуĸтов разработано</Task>
        <Task icon={Icon3}>Проектируются новые государственные стандарты</Task>
        <Task icon={Icon4}>Появились первые открытые реализации постквантовых алгоритмов</Task>
      </div>

      <h4>Пилотируют и исследуют</h4>

      <div className={style.logos}>
        <LogoItem logo={logo1} />
        <LogoItem logo={logo2} />
        <LogoItem logo={logo3} />
        <LogoItem logo={logo4} />
        <LogoItem logo={logo5} />
        <LogoItem logo={logo6} />
        <LogoItem logo={logo7} />
        <LogoItem logo={logo8} />
      </div>
    </div>
  );
};
