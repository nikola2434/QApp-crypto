import style from './Prizes.module.scss';
import BG from '@public/images/bg_prize.png';
import Logo from '@public/icons/museup_logo.gif';

export const Prizes = () => {
  return (
    <div className={style.prize} id="prizes">
      <div className={style.back}>
        <img src={BG} alt="" className={style.image} draggable={false} loading="lazy" />
      </div>
      <div className={style.container}>
        <img src={Logo} alt="" draggable={false} loading="lazy" />
        <span>
          3 билета в музей криптографии –<br /> призы для самых внимательных
        </span>
      </div>
    </div>
  );
};
