import { Header } from '@UI/Header';
import { ItemOrganizator } from './ItemOrganizator';
import IU10 from '@public/images/iu10.png';
import QApp from '@public/images/QAPP.png';
import MGTU from '@public/images/MGTU.png';

import style from './Organizers.module.scss';

export const Organizers = () => {
  return (
    <section className={style.organizers}>
      <div className={style.rect}></div>
      <Header>Организаторы</Header>
      <div className={style.container}>
        <div className={style.container_organizers}>
          <ItemOrganizator
            img={IU10}
            link="https://iu10.bmstu.ru/"
            alt="Кафедра ИУ10 «Защита информации»"
            title={
              <>
                Кафедра ИУ10 <span>«Защита информации»</span>
              </>
            }
          />
          <ItemOrganizator
            img={QApp}
            link="https://qapp.tech/"
            title="Отечественная компания сегмента кибербезопасности
QApp (ООО «КуАпп»)"
          />
          <ItemOrganizator
            img={MGTU}
            link="https://ib.bmstu.ru/"
            alt="ИНФОБЕЗ МГТУ им. Н.Э. Баумана Центр дополнительного образования"
            title={
              <>
                ИНФОБЕЗ
                <br />
                МГТУ им. Н.Э. Баумана
                <br />
                Центр дополнительного образования
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
