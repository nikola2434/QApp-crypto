import { FC, PropsWithChildren, ReactNode } from 'react';
import style from './Task.module.scss';

export const Task: FC<PropsWithChildren<{ icon: ReactNode }>> = ({ icon, children }) => {
  return (
    <div className={style.task}>
      {icon}
      <span>{children}</span>
    </div>
  );
};
