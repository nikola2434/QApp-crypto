import { ProtocolText } from './ProtocolText';
import BgImage from '@public/images/bg2.png';

import style from './ProtocolInfo.module.scss';

export const ProtocolInfo = () => {
  return (
    <div className={style.protocol_info}>
      <div className={style.back}>
        <img src={BgImage} alt="" className={style.image} draggable={false} />
      </div>
      <ProtocolText />
    </div>
  );
};
