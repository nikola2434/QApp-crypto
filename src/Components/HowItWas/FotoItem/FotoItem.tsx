import { FC } from 'react';
import style from './FotoItem.module.scss';

interface PhotoItemProps {
  img: string;
  alt: string;
  onClick: () => void;
}

export const FotoItem: FC<PhotoItemProps> = ({ alt, img, onClick }) => {
  return (
    <div className={style.item} onClick={onClick}>
      <img src={img} alt={alt} draggable="false" loading="lazy" />
    </div>
  );
};
