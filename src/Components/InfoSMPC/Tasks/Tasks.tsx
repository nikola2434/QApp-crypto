import BgProtocol from '@public/images/bgProtocol.png';
import Logo from '@public/images/logo.png';
import { LeftBlock } from './LeftBlock';
import { RightBlock } from './RightBlock';

import style from './Tasks.module.scss';

export const Tasks = () => {
  return (
    <div className={style.tasks}>
      <div className={style.back}>
        <img src={Logo} alt="" className={style.logo} draggable={false} loading="lazy" />
        <img src={BgProtocol} alt="" className={style.image} draggable={false} loading="lazy" />
      </div>

      <LeftBlock />
      <RightBlock />
    </div>
  );
};
