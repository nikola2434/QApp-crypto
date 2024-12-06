import { FC } from 'react';

import style from './TimelineItem.module.scss';

interface TimelineItemProps {
  time: string;
  img?: string;
  title: string;
  subTitle?: string;
  name?: string;
}

export const TimelineItem: FC<TimelineItemProps> = ({ name, time, title, img, subTitle }) => {
  return (
    <>
      <div className={style.time}>{time}</div>
      <div className={style.item_image}>
        {img ? (
          <div className={style.image}>
            <img alt={name} src={img} draggable={false} loading="lazy" />
          </div>
        ) : (
          <span className={style.circle}></span>
        )}
      </div>

      <div className={style.info}>
        <h5>{title}</h5>
        {subTitle ? <h6>{subTitle}</h6> : null}
        {name ? <span>{name}</span> : null}
      </div>
    </>
  );
};
