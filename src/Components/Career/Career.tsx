import { Header } from '@UI/Header';
import style from './Career.module.scss';
import { Button } from '@UI/Button';
import { Blocks } from './Bloks';
import { Video } from '@UI/Video';

export const Career = () => {
  return (
    <section className={style.career}>
      <Header>Карьера в QApp</Header>

      <Blocks />

      <Video />
    </section>
  );
};
