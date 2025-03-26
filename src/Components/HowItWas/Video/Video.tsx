import style from './Video.module.scss';
import video from '@public/videos/video.mp4';

export const Video = () => {
  return (
    <div className={style.video_wrapper}>
      <video autoPlay draggable="false" muted loop>
        <source src={video} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
