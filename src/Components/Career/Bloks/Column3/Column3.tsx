import Vector6 from '@public/figures/star.svg';
import Gazprom from '@public/icons/logos/Gazprombank.svg';
import Startech from '@public/icons/logos/startech.svg';

import style from './Column3.module.scss';

export const Column3 = () => {
  return (
    <div className={style.column3}>
      <div className={style.block_1}>
        <h3>
          Топим <br />
          за науку
        </h3>
        <p>
          Фундаментальные <span>и прикладные</span> исследования в основе нашей работы
        </p>
        <span className={style.business}>бизнес</span>
        <span className={style.research}>рисеч</span>
        <div className={style.star_1}>
          <Vector6 />
        </div>
        <div className={style.star_2}>
          <Vector6 />
        </div>
      </div>

      <div className={style.block_2_3}>
        <div className={style.logo_gaz}>
          <Gazprom />
        </div>
        <p>При стратегической поддержке Газпромбанка</p>
      </div>

      <div className={style.block_2_3}>
        <div className={style.logo}>
          <Startech />
        </div>
        <p>Победители всероссийских конкурсов перспективных IT-решений</p>
      </div>
    </div>
  );
};
