import QApp from '@public/icons/logos/QApp.svg';
import Partner from '@public/icons/logos/partner.svg';
import BankRf from '@public/icons/logos/bank_rf.svg';
import SBER from '@public/icons/logos/sber_bank.svg';
import Gazprom from '@public/icons/logos/gazprom.svg';
import Nspk from '@public/icons/logos/nspk.svg';
import Okb from '@public/icons/logos/okb.svg';
import Ti from '@public/icons/logos/ti.svg';
import Moex from '@public/icons/logos/moex.svg';
import Astra from '@public/icons/logos/astra_linux.svg';
import Noc from '@public/icons/logos/noc.svg';

import style from './Column2.module.scss';

export const Column2 = () => {
  return (
    <div className={style.column2}>
      <div className={style.header}>
        <QApp />
        <div className={style.sub_logos}>
          <Partner />
          <Noc />
        </div>
      </div>

      <h2>Разрабатываем инновационные программные решения кибербезопасности</h2>
      <div className={style.tags}>
        <span className={style.tag}>Конфиденциальные вычисления</span>
        <span className={style.tag}>Постквантовые алгоритмы</span>
      </div>

      <h4>Наши клиенты</h4>
      <div className={style.clients}>
        <div className={style.item}>
          <BankRf />
        </div>
        <div className={style.item}>
          <SBER />
        </div>

        <div className={style.item}>
          <Gazprom />
        </div>
        <div className={style.item}>
          <Nspk />
        </div>
        <div className={style.item}>
          <Okb />
        </div>
        <div className={style.item}>
          <Ti />
        </div>
        <div className={style.item}>
          <Moex />
        </div>
        <div className={style.item}>
          <Astra />
        </div>
      </div>
    </div>
  );
};
