import AHLogo from "../assets/logos/AHLogo";
import AXLLogo from "../assets/logos/AXLLogo";
import BASFLogo from "../assets/logos/BASFLogo";
import BigCommerceLogo from "../assets/logos/BigCommerceLogo";
import FDOTLogo from "../assets/logos/FDOTLogo";
import ICLogo from "../assets/logos/ICLogo";
import NULogo from "../assets/logos/NULogo";
import OCLSLogo from "../assets/logos/OCLSLogo";
import StripeLogo from "../assets/logos/StripeLogo";
import BenefitFocusLogo from "../assets/logos/BenefitFocusLogo";
import StyleMePrettyLogo from "../assets/logos/StyleMePrettyLogo";
import Marquee from "react-fast-marquee";
const logos = [
  StyleMePrettyLogo,
  BenefitFocusLogo,
  StripeLogo,
  FDOTLogo,
  BASFLogo,
  BigCommerceLogo,
  NULogo,
  AHLogo,
  ICLogo,
  OCLSLogo,
  AXLLogo,
];

const LogoCarousel = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  console.log(prefersReducedMotion);
  return !prefersReducedMotion ? (
    <div className="relative -z-10 flex gap-4">
      <div className="pointer-events-none absolute -left-2 bottom-0 top-0 z-10 w-72 bg-gradient-to-r from-white to-transparent"></div>

      <Marquee className="flex items-center justify-center" speed={100}>
        {logos.map((Logo, index) => (
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
    <div className="xl:grid grid-cols-4 items-center justify-center gap-4 flex flex-wrap ">
      {logos.slice(0, -3).map((Logo, index) => (
        <div key={index} className="flex items-center justify-center xl:px-[8rem] p-8">
          <Logo />
        </div>
      ))}
      <div className="col-span-4 flex justify-center xl:gap-4 flex-wrap xl:flex-nowrap">
        {logos.slice(-3).map((Logo, index) => (
          <div key={index} className="flex items-center justify-center p-8 xl:px-[8rem] xl:p-4">
            <Logo />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;
