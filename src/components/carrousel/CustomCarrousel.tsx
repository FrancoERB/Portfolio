import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useRef } from 'react';
import projects from '../../mockData/mockData';
import CustomCard from '../card/CustomCard';

export const CustomCarrousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true,
  });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    };

    autoplayRef.current = setInterval(autoplay, 3000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [emblaApi]);
  return (
    <div className="embla relative w-full overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {projects.map((proyect, index) => (
          <div
            className="embla__slide flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] px-2"
            key={index}
          >
            <CustomCard
              title={proyect.title}
              image={proyect.image}
              description={proyect.description}
              tags={proyect.tags}
              link={proyect.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
