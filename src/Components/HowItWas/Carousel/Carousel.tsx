import { FC } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons';
import styles from './ Carousel.module.scss';

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
};

export const Carousel: FC<PropType> = ({ images, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((src, ind) => (
            <div className={styles.embla__slide} key={ind}>
              <img
                className={styles.embla__slide__img}
                src={src}
                alt={`Фотография ${ind + 1}`}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};
