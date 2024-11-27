import { TimelineItem } from './TimelineItem';
import Expert4 from '@public/images/expert4.png';
import Expert3 from '@public/images/expert3.png';
import Expert2 from '@public/images/expert2.png';
import Expert1 from '@public/images/expert1.png';
import EgorPortrait from '@public/images/Egor-portrait.png';

import style from './Timeline.module.scss';

export const Timeline = () => {
  return (
    <div className={style.timeline}>
      <TimelineItem time="15:40—16:00" title="Сбор участников митапа" />
      <TimelineItem
        time="16:00—16:10"
        title="Приветственное слово"
        name="Юлия Грачёва, зам. заведующего кафедрой ИУ10 «Защита информации»"
        img={Expert4}
      />
      <TimelineItem
        time="16:10—16:30"
        title="Развитие конфиденциальных вычислений в России"
        name="Антон Гугля,	генеральный директор QApp"
        subTitle="Кейсы апробации, регуляторика и кадры"
        img={Expert3}
      />
      <TimelineItem
        time="16:30—16:45"
        title="Введение в технологию конфиденциальных вычислений"
        name="Максим Кот, руководитель разработки в QApp"
        img={Expert2}
      />
      <TimelineItem
        time="16:45—17:30"
        title="Введение в программный подход к реализации конфиденциальных вычислений (SMPC)"
        name="Егор Сабитов, ведущий исследователь в QApp"
        img={Expert1}
      />
      <TimelineItem time="17:30—18:20" title="Ответы на вопросы" img={EgorPortrait} />
      <TimelineItem
        time="18:20—18:30"
        title="Закрытие мероприятия"
        name="Антон Гугля,	генеральный директор QApp"
        img={Expert3}
      />
    </div>
  );
};
