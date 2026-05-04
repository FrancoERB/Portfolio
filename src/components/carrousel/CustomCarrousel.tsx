import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';
type CustomCarouselProps = {
  children: ReactNode;
  autoPlay?: boolean;
};

export const CustomCarrousel = ({
  children,
  autoPlay = false,
}: CustomCarouselProps) => {
  const plugins = autoPlay
    ? [
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]
    : [];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      dragFree: false,
    },
    plugins,
  );
  return (
    <div
      ref={emblaRef}
      className="relative w-full overflow-hidden dark:bg-background bg-primary px-4"
    >
      <div className="flex -ml-2">{children}</div>
    </div>
  );
};
