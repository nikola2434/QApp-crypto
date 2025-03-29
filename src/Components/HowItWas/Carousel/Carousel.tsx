import { FC, useCallback, useEffect, useRef } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from './CarouselArrowButtons';
import styles from './ Carousel.module.scss';

type PropType = {
  images: string[];
  options?: EmblaOptionsType;
  setActiveIndex: (ind: number) => void;
  activeIndex: number;
  videoSrc?: string;
};

export const Carousel: FC<PropType> = ({ images, options, setActiveIndex, activeIndex, videoSrc }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const newValue = emblaApi.selectedScrollSnap();

    if (newValue !== images.length && videoRef.current) {
      videoRef.current.muted = true;
    }
    setActiveIndex(newValue);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    if (activeIndex === emblaApi.selectedScrollSnap()) return;

    emblaApi.scrollTo(activeIndex, true);
  }, [emblaApi, activeIndex]);

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
          {videoSrc && (
            <div className={styles.embla__slide} key={images.length}>
              <video controls loop autoPlay muted draggable="false" ref={videoRef}>
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      </div>
      <div className={styles.embla__buttons}>
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
};
