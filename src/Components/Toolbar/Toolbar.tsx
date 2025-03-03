import { LogoToolbar } from './LogoToolbar';
import { Navs } from './Navs';
import style from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <header className={style.header}>
      <LogoToolbar />

      <div className={style.links}>
        <Navs />

        <a target="_blank" rel="noopener noreferrer" href="https://forms.yandex.ru/u/67c063c302848fe27524f9d8/">
          Зарегистрироваться
        </a>
      </div>
    </header>
  );
};
