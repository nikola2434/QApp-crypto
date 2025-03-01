import BgProtocol from '@public/images/bg_info_block2.webp';
import { LeftBlock } from './LeftBlock';
import { RightBlock } from './RightBlock';

import style from './Tasks.module.scss';

export const Block2 = () => {
  return (
    <div className={style.tasks}>
      <div className={style.back}>
        <img src={BgProtocol} alt="" className={style.image} draggable={false} loading="lazy" />
      </div>

      <LeftBlock />
      <RightBlock />
    </div>
  );
};
