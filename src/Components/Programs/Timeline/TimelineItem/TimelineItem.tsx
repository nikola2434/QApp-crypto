import { FC, ReactNode } from 'react';
import clsx from 'clsx';

import style from './TimelineItem.module.scss';

interface TimelineItemProps {
  time?: string;
  img?: string;
  title: ReactNode;
  subTitle?: ReactNode;
  last?: boolean;
}

export const TimelineItem: FC<TimelineItemProps> = ({ time, title, img, subTitle, last = false }) => {
  return (
    <>
      <div className={style.time}>{time}</div>
      <div className={style.item_image}>
        {img ? (
          <div className={style.image}>
            <img alt={String(title)} src={img} draggable={false} loading="lazy" />
          </div>
        ) : (
          <span className={clsx(style.circle, last && style.last_circle)}></span>
        )}
      </div>

      <div className={style.info}>
        <h5>{title}</h5>
        {subTitle ? <h6>{subTitle}</h6> : null}
      </div>
    </>
  );
};
