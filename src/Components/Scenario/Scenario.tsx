import { Header } from '@UI/Header';
import style from './Scenario.module.scss';
import { DefaultCard } from './DefaultCard';
import { ActiveCard } from './ActiveCard';
import Icon5 from '@public/icons/icon5.png';
import { Prizes } from './Prizes';
import { Button } from '@UI/Button';

export const Scenario = () => {
  return (
    <section className={style.scenario}>
      <Header>Что было на митапе</Header>

      <div className={style.container}>
        <div className={style.container_grid}>
          <div className={style.cards}>
            <DefaultCard
              num={<img alt="" src={Icon5} draggable={false} loading="lazy" />}
              numText="Разбор модели квантовых атак"
              text="Обсудим акутальность квантовой угрозы и уязвимости классической криптографии "
            />
            <DefaultCard
              num={2}
              numText="часа"
              text="Без воды: сравним классическую криптографию с постквантовой, рассмотрим различные алгоритмы, узнаем про кейсы в России и мире"
            />
            <DefaultCard
              num={3}
              numText="эксперта"
              text="Ведущие специалисты научно-технологической компании QApp поделятся экспертизой и ответят на ваши вопросы"
            />

            <ActiveCard />
          </div>
          <Prizes />
        </div>
      </div>

      {/* <Button text="Участие бесплатно" size="lg">
        Зарегистрироваться на митап
      </Button> */}
    </section>
  );
};
