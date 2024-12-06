import { FC, ReactNode } from 'react';
import style from './ItemOrganizator.module.scss';

interface itemProps {
  title: ReactNode;
  link: string;
  img: string;
  alt?: string;
}

export const ItemOrganizator: FC<itemProps> = ({ img, link, title, alt }) => {
  return (
    <a className={style.link} target="_blank" href={link}>
      <div className={style.image}>
        <img src={img} alt={alt ? alt : String(title)} draggable={false} loading="lazy" />
      </div>
      <span>{title}</span>
    </a>
  );
};
