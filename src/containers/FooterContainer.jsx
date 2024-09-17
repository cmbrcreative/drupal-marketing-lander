import React from "react";
import CmbrLogoWhite from "../assets/icons/CmbrLogoWhite";
import { Squircle } from "@squircle-js/react";

const FooterContainer = () => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        src="https://cmbr-assets.s3.amazonaws.com/glass_loop.mov"
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(113deg, rgba(0, 133, 162, .9) -0.01%, rgba(76, 0, 201, .8) 99.99%)",
          mixBlendMode: "hard-light", // Apply mix-blend-mode to the gradient background
        }}
      />
      <div className="relative z-20 w-full">
        <div className="relative z-20 flex flex-col gap-[4rem] pb-[4rem] pt-[8rem] md:px-[2.4rem] md:pb-[8rem] md:pt-[16rem] lg:gap-[16rem] lg:px-[8rem] lg:pt-[25.6rem]">
          <div className="mx-auto flex max-w-[105.2rem] flex-col items-center justify-center gap-[2.4rem]">
            <p
              className="text-center font-rebond font-bold leading-[108%] tracking-[-0.12rem] text-white"
              style={{ fontSize: "clamp(2rem, 7vw + 1rem, 12rem)" }}
            >
              Secure your team.
            </p>
            <Squircle
              className="w-full"
              cornerRadius={35}
              cornerSmoothing={1}
              asChild
            >
              <button
                className="w-full whitespace-nowrap bg-white/15 px-[3.2rem] py-[2rem] font-rebond font-medium leading-[108%] tracking-[-0.048rem] text-white backdrop-blur-[20px] lg:px-[6.4rem] lg:py-[4.8rem]"
                style={{ fontSize: "clamp(2rem, 2.5vw + 1rem, 4.8rem)" }}
              >
                Start now at just $8k/mo
              </button>
            </Squircle>
            <div className="flex flex-col items-center">
              <p className="px-[3.2rem] py-[2rem] text-white">
                &mdash; or &mdash;
              </p>
              <a className="link-text px-[3.2rem] py-[2rem] text-[2rem] text-white">
                Book A Free Consultation
              </a>
            </div>
          </div>

          <div className="mx-auto flex max-w-[151.2rem] flex-col items-center gap-[3.2rem] text-white md:items-start">
            <CmbrLogoWhite />
            <div className="flex w-full flex-col items-center justify-between gap-8 md:flex-row md:items-end lg:gap-16">
              <div className="flex flex-col items-center gap-0 text-white md:justify-end">
                <p className="p-sm-reg max-w-[30ch]">
                  🇺🇸 Made in the USA by a distributed team from FL, NC, SC, NH,
                  PA, TX, TN, and CA.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <p className="p-sm-bold">Contact:</p>
                <a
                  href="mailto:newclient@cmbr.co"
                  className="p-sm-reg underline"
                >
                  newclient@cmbr.co
                </a>
              </div>
              <p className="p-sm-reg">
                © 2024 Camber Creative. All rights reserved.
              </p>
              <a
                href="https://www.cmbr.ai/privacy-policy"
                className="p-sm-reg underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
