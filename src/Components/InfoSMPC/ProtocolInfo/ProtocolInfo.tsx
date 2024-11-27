import { ProtocolText } from './ProtocolText';

import style from './ProtocolInfo.module.scss';
import { ProtocolImage } from './ProtocolImage';

export const ProtocolInfo = () => {
  return (
    <div className={style.protocol_info}>
      <ProtocolText />
      <ProtocolImage />
    </div>
  );
};
