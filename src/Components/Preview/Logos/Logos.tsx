import style from './Logos.module.scss';
import LogoMGTU from '@public/icons/logo_mgtu.svg';
import LogoQAPP from '@public/icons/logo_qapp.svg';
import Cross from '@public/figures/cross.svg';

export const Logos = () => {
  return (
    <div className={style.logos}>
      <a href="https://ib.bmstu.ru/" target="_blank">
        <LogoMGTU />
      </a>
      <div className={style.cross}>
        <Cross />
      </div>
      <a href="https://qapp.tech/" target="_blank">
        <LogoQAPP />
      </a>
    </div>
  );
};
