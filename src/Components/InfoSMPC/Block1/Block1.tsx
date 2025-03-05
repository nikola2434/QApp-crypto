import style from './Block1.module.scss';
import BG from '@public/images/bg_info_block1.webp';
import shield from '@public/images/shield.webp';

import Car from '@public/icons/icon-car-5.png';
import CPU from '@public/icons/icon-processor-1.png';
import Comp from '@public/icons/icon-desk-3.png';
import Mobile from '@public/icons/icon-phone-2.png';
import Server from '@public/icons/icon-server-4.png';
import Drone from '@public/icons/icon-drone-6.png';
import { ItemIcon } from './ItemIcon';

export const Block1 = () => {
  return (
    <div className={style.block1}>
      <div className={style.back}>
        <img src={BG} alt="" className={style.image} draggable={false} loading="lazy" />
        <img src={shield} alt="" className={style.shield} draggable={false} loading="lazy" />
      </div>
      <div className={style.content}>
        <div className={style.info1}>
          <h2>
            Постквантовая <br />
            криптография –
          </h2>
          <span className={style.description}>
            Новый ĸласс асимметричных алгоритмов, устойчивых ĸ ĸибератаĸам с применением ĸаĸ ĸлассичесĸих, таĸ и
            ĸвантовых ĸомпьютеров
          </span>
        </div>
        <div className={style.info2}>
          <h4>Легко интегрировать в различные сферы</h4>
          <div className={style.icons}>
            <ItemIcon icon={CPU} />
            <ItemIcon icon={Mobile} />
            <ItemIcon icon={Comp} />
            <ItemIcon icon={Server} />
            <ItemIcon icon={Car} />
            <ItemIcon icon={Drone} />
          </div>
        </div>
      </div>
    </div>
  );
};
