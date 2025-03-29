import { Header } from '@UI/Header';
import style from './HowItWas.module.scss';
import { Video } from './Video';
import videoSrc from '@public/videos/video.mp4';

import foto1 from '@public/images/fotos/1.jpg';
import foto2 from '@public/images/fotos/2.jpg';
import foto3 from '@public/images/fotos/3.jpg';
import foto4 from '@public/images/fotos/4.jpg';
import foto5 from '@public/images/fotos/5.jpg';
import foto6 from '@public/images/fotos/6.jpg';
import foto7 from '@public/images/fotos/7.jpg';
import { FotoItem } from './FotoItem';
import { useState } from 'react';
import { Modal } from '@UI/Modal';
import { Carousel } from './Carousel';

const photos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];
export const HowItWas = () => {
  const [openCarousel, setOpenCarousel] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const openModal = function (index: number) {
    setActiveSlide(index);
    setOpenCarousel(true);
  };
  const closeModal = function () {
    setOpenCarousel(false);
  };

  return (
    <section className={style.page}>
      <Header>Как это было</Header>
      <h2>10 марта, 2025</h2>
      <div className={style.container}>
        <Video onClick={() => openModal(7)} src={videoSrc} />
        <div className={style.photos}>
          <div className={style.main_photo} onClick={() => openModal(0)}>
            <img src={foto1} alt="photo_1" draggable="false" loading="lazy" />
          </div>

          <FotoItem img={foto2} alt="photo2" onClick={() => openModal(1)} />
          <FotoItem img={foto3} alt="photo3" onClick={() => openModal(2)} />
          <FotoItem img={foto4} alt="photo4" onClick={() => openModal(3)} />
          <FotoItem img={foto5} alt="photo5" onClick={() => openModal(4)} />
          <FotoItem img={foto6} alt="photo6" onClick={() => openModal(5)} />
          <FotoItem img={foto7} alt="photo7" onClick={() => openModal(6)} />
        </div>
      </div>

      {openCarousel && (
        <Modal onClose={closeModal}>
          <Carousel images={photos} activeIndex={activeSlide} setActiveIndex={setActiveSlide} videoSrc={videoSrc} />
        </Modal>
      )}
    </section>
  );
};
