import { Info } from './Info';
import style from './InfoSMPC.module.scss';
import { ProtocolInfo } from './ProtocolInfo';
import { Tasks } from './Tasks';

export const InfoSMPC = () => {
  return (
    <section className={style.info}>
      <Info />
      <ProtocolInfo />
      <Tasks />
    </section>
  );
};
