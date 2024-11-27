import style from './ProtocolImage.module.scss';
import BgImage from '@public/images/bg2.png';

export const ProtocolImage = () => {
  return (
    <div className={style.bg}>
      <div className={style.first}></div>
      <div className={style.protocol_image}>
        <img src={BgImage} alt="" className={style.image} draggable={false} />
      </div>
    </div>
  );
};
