import { FC, ReactNode } from 'react';
import style from './ItemOrganizator.module.scss';

interface itemProps {
  title: ReactNode;
  link: string;
  img: string;
}

export const ItemOrganizator: FC<itemProps> = ({ img, link, title }) => {
  return (
    <a className={style.link} target="_blank" href={link}>
      <div className={style.image}>
        <img src={img} alt={String(title)} draggable={false} />
      </div>
      <span>{title}</span>
    </a>
  );
};
