import { FC, PropsWithChildren, ReactElement } from 'react';
import style from './Task.module.scss';

export const Task: FC<PropsWithChildren<{ IconCard: ReactElement }>> = ({ IconCard, children }) => {
  return (
    <div className={style.task}>
      <div className={style.icon}>{IconCard}</div> {/* Просто вставляем элемент */}
      <span>{children}</span>
    </div>
  );
};
