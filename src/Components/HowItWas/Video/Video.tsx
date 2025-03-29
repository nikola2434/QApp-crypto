import { FC } from 'react';
import style from './Video.module.scss';

interface VideoProps {
  onClick: () => void;
  src: string;
}

export const Video: FC<VideoProps> = ({ onClick, src }) => {
  return (
    <div className={style.video_wrapper} onClick={onClick}>
      <video autoPlay draggable="false" muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
