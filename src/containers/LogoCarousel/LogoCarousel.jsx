import Marquee from "react-fast-marquee";
import { logoCarouselConstants } from "./_logoCarouselConstants";

const LogoCarousel = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return !prefersReducedMotion ? (
    <div className="relative -z-10 flex gap-4">
      <div className="pointer-events-none absolute -left-2 bottom-0 top-0 z-10 w-72 bg-gradient-to-r from-white to-transparent"></div>

      <Marquee className="flex items-center justify-center" speed={100}>
        {logoCarouselConstants.logos.map((Logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-[8rem]"
          >
            <Logo />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute -right-2 bottom-0 top-0 z-10 w-72 bg-gradient-to-l from-white to-transparent"></div>
    </div>
  ) : (
    <div className="flex grid-cols-4 flex-wrap items-center justify-center gap-4 xl:grid">
      {logoCarouselConstants.logos.slice(0, -3).map((Logo, index) => (
        <div
          key={index}
          className="flex items-center justify-center p-8 xl:px-[8rem]"
        >
          <Logo />
        </div>
      ))}
      <div className="col-span-4 flex flex-wrap justify-center xl:flex-nowrap xl:gap-4">
        {logoCarouselConstants.logos.slice(-3).map((Logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-8 xl:p-4 xl:px-[8rem]"
          >
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
