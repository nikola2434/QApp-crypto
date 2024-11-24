import BgImage from '@public/images/bg3.png';
import { LeftBlock } from './LeftBlock';
import { RightBlock } from './RightBlock';

import style from './Tasks.module.scss';

export const Tasks = () => {
  return (
    <div className={style.tasks}>
      <div className={style.back}>
        <img src={BgImage} alt="" className={style.image} draggable={false} />
      </div>

      <LeftBlock />
      <RightBlock />
    </div>
  );
};
