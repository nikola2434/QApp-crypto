import { Header } from '@UI/Header';
import style from './Scenario.module.scss';
import { Mark } from '@UI/Mark';
import { DefaultCard } from './DefaultCard';
import { ActiveCard } from './ActiveCard';
import { Button } from '@UI/Button';

export const Scenario = () => {
  return (
    <section className={style.scenario}>
      <Header>
        <span className={style.row_1}>Что будет</span>
        <span className={style.row_2}>
          на <Mark vector="2">митапе</Mark>
        </span>
      </Header>

      <div className={style.container}>
        <div className={style.cards}>
          <DefaultCard
            num={3}
            numText="спикера"
            text="Ведущие специалисты научно-технологической компании QApp поделятся экспертизой и ответят на ваши вопросы"
          />
          <DefaultCard
            num={2}
            numText="часа"
            text={
              <>
                Без воды:
                <br />
                от простого к сложному.
                <br />
                Только полезная информация
              </>
            }
          />
          <DefaultCard
            num={3}
            numText={
              <>
                блок
                <br />
                про SMPC
              </>
            }
            text="Узнай, как развивается направление конфиденциальных вычислений, как работает технология, и как реализовать ее программно"
          />

          <ActiveCard />
        </div>
      </div>

      <Button text="Участие бесплатно" size="lg">
        Зарегистрироваться
      </Button>
    </section>
  );
};
