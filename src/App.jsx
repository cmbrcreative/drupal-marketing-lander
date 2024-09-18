import { motion } from "framer-motion";
import DarkBlueBlob from "./assets/icons/DarkBlueBlob";
import LightBlueBlob from "./assets/icons/LightBlueBlob";
import PurpleBlob from "./assets/icons/PurpleBlob";
import YellowBlob from "./assets/icons/YellowBlob";
import {
  FAQ,
  Hero,
  Nav,
  WorkSamples,
  LogoCarousel,
  CTASection,
} from "./containers";
import CertificationsContainer from "./containers/Certifications/CertificationsContainer";
import FooterContainer from "./containers/FooterContainer";
import ManifestoContainer from "./containers/ManifestoContainer";
import PrinciplesContainer from "./containers/Principles/PrinciplesContainer";
import ServicesContainer from "./containers/Services/ServicesContainer";
import TestimonialContainer from "./containers/TestimonialContainer";
import "./index.css";

function App() {
  return (
    <motion.div>
      <div className="max-w-screen relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[1000px] w-[151.2rem] -translate-x-1/2">
          <LightBlueBlob className="absolute -right-[7%]" />
          <YellowBlob className="absolute -bottom-[50%] left-8 md:-bottom-1/2 md:-left-1/4" />
          <DarkBlueBlob className="absolute -bottom-1/3 -right-1/3" />
          <PurpleBlob className="absolute -right-1/3 -top-1/3" />
        </div>
        <div className="relative mx-auto max-w-[151.2rem] px-[1.6rem]">
          <Nav />
          <div className="z-20 mb-[4rem] md:mb-[8rem]">
            <Hero />
          </div>
          <div className="-z-[2] mb-[6.4rem] md:mb-[8rem]">
            <LogoCarousel />
          </div>
          <div className="mb-[6.4rem] lg:mb-[14.4rem]">
            <ServicesContainer />
          </div>
          <div className="mb-[6.4rem] lg:mb-[14.4rem]">
            <WorkSamples />
          </div>
          <div className="mb-[12.8rem]">
            <CertificationsContainer />
          </div>
        </div>
        <div className="mx-auto max-w-[151.2rem]">
          <TestimonialContainer />
        </div>
        <div className="relative mx-auto max-w-[151.2rem] px-[2.4rem]">
          <div className="mb-[14.4rem]">
            <CTASection />
          </div>
          <div className="mb-[14.4rem]">
            <FAQ />
          </div>
          <div className="mb-[14.4em]">
            <PrinciplesContainer />
          </div>
          <div className="mb-[14.4rem]">
            <ManifestoContainer />
          </div>
        </div>
        <FooterContainer />

        <svg width="0" height="0" style={{ position: "absolute", opacity: 0 }}>
          <defs>
            <clipPath id="squircleClip" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.1 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5" />
            </clipPath>
            <path
              id="squirclePath"
              d="M 0,0.1 C 0,0 0,0 0.5,0 S 1,0 1,0.5 1,1 0.5,1 0,1 0,0.5"
              fill="none"
              stroke="red"
              strokeWidth="0.02" /* Adjust stroke width as needed */
            />
          </defs>
        </svg>
      </div>
    </motion.div>
  );
}

export default App;
