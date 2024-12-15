import { Header } from '@UI/Header';
import style from './HowItWas.module.scss';
import { Video } from './Video';

import foto1 from '@public/images/fotos/foto1.webp';
import foto2 from '@public/images/fotos/foto2.webp';
import foto3 from '@public/images/fotos/foto3.webp';
import foto4 from '@public/images/fotos/foto4.webp';
import foto5 from '@public/images/fotos/foto5.webp';
import foto6 from '@public/images/fotos/foto6.webp';
import foto7 from '@public/images/fotos/foto7.webp';
import { FotoItem } from './FotoItem';

export const HowItWas = () => {
  return (
    <section className={style.page}>
      <Header>Как это было</Header>
      <h2>5 декабря, 2024</h2>
      <div className={style.container}>
        <Video />
        <div className={style.photos}>
          <div className={style.main_photo}>
            <img src={foto1} alt="photo_1" draggable="false" loading="lazy" />
          </div>

          <FotoItem img={foto2} alt="photo2" />
          <FotoItem img={foto3} alt="photo3" />
          <FotoItem img={foto4} alt="photo4" />
          <FotoItem img={foto5} alt="photo5" />
          <FotoItem img={foto6} alt="photo6" />
          <FotoItem img={foto7} alt="photo7" />
        </div>
      </div>
    </section>
  );
};
