import { LogoToolbar } from './LogoToolbar';
import { Navs } from './Navs';
import style from './Toolbar.module.scss';

export const Toolbar = () => {
  return (
    <header className={style.header}>
      <LogoToolbar />

      <div className={style.links}>
        <Navs />
      </div>
    </header>
  );
};
