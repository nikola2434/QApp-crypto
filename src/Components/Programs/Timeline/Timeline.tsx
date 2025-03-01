import { TimelineItem } from './TimelineItem';
import Expert4 from '@public/images/expert4.webp';

import style from './Timeline.module.scss';

export const Timeline = () => {
  return (
    <div className={style.timeline}>
      <TimelineItem time="15:40" title="Сбор участников митапа" last />
      <TimelineItem
        title="Приветственное слово"
        subTitle={
          <>
            Юлия Грачёва, зам. заведующего <br />
            кафедрой ИУ10 «Защита информации»
          </>
        }
        img={Expert4}
      />
      <TimelineItem
        title={
          <>
            Квантовая угроза. Модель атак. <br />
            Актуальность
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Сравнение постквантовой <br />и классической криптографии
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Сравнение постквантовой <br />и квантовой криптографии
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Постквантовый алгоритм <br /> цифровой подписки «Гиперикум»
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Обзор отечественных программных решений <br />
            на основе постквантовой криптографии
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Обзор кейсов пилотирования <br />
            постквантовой криптографии в Мире
          </>
        }
      />
      <TimelineItem
        title={
          <>
            Обзор кейсов пилотирования <br />
            постквантовой криптографии в России
          </>
        }
      />
      <TimelineItem title="Ответы на вопросы" />
      <TimelineItem title="Викторина" />
      <TimelineItem time="18:30" title="Закрытие мероприятия" last />
    </div>
  );
};
