import { Header } from '@UI/Header';
import MapImage from '@public/images/map.png';
import QrCode from '@public/images/qr.png';

import style from './Map.module.scss';

export const Map = () => {
  return (
    <section className={style.map}>
      <Header>Место проведения</Header>
      <div className={style.container}>
        <img src={MapImage} alt="Карта прохода к аудитории 120T" draggable={false} loading="lazy" />

        <div className={style.info}>
          <div>
            <h2>Карта прохода к аудитории 120T</h2>
            <div className={style.count_info}>
              <span>1</span>
              <p>Проходная (2-я Бауманская улица, 5с12)</p>
            </div>
            <div className={style.count_info}>
              <span>2</span>
              <p>Аудитория 120Т</p>
            </div>
          </div>

          <div className={style.qr_code}>
            <div className={style.img}>
              <img
                src={QrCode}
                alt=" МГТУ им. Н.Э. Баумана г. Москва, 2-я Бауманская улица, 5/10"
                draggable={false}
                loading="lazy"
              />
            </div>
            <p>
              МГТУ им. Н.Э. Баумана <br /> г. Москва, 2-я Бауманская улица, 5/10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
