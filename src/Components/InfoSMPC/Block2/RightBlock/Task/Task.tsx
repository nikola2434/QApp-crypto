import { FC, PropsWithChildren, ReactNode } from 'react';
import style from './Task.module.scss';

export const Task: FC<PropsWithChildren<{ icon: string }>> = ({ icon, children }) => {
  return (
    <div className={style.task}>
      <div className={style.icon}>
        <img src={icon} alt={String(children)} loading="lazy" draggable={false} />
      </div>
      <span>{children}</span>
    </div>
  );
};
