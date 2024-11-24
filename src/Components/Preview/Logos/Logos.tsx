import style from './Logos.module.scss';
import LogoMGTU from '@public/icons/logo_mgtu.svg';
import LogoQAPP from '@public/icons/logo_qapp.svg';
import Cross from '@public/figures/cross.svg';

export const Logos = () => {
  return (
    <div className={style.logos}>
      <a href="/" target="_blank">
        <LogoMGTU />
      </a>
      <Cross />
      <a href="/" target="_blank">
        <LogoQAPP />
      </a>
    </div>
  );
};
