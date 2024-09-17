import { Squircle } from "@squircle-js/react";
import React from "react";
import CmbrLogoWhite from "../assets/icons/CmbrLogoWhite";

const FooterContainer = () => {
  return (
    <div className="relative bg-black/25">
      <div className="relative z-10 flex flex-col gap-[16rem] px-[8rem] pb-[8rem] pt-[25.6rem]">
       
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/cvSTb2rSh9k?autoplay=1&mute=1&controls=0&loop=1&playlist=cvSTb2rSh9k&showinfo=0&modestbranding=1"
              frameBorder="0"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                // transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
              allow="autoplay; fullscreen"
            ></iframe>
     
        </div>
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
              className="w-full whitespace-nowrap bg-white/15 px-[6.4rem] py-[4.8rem] font-rebond font-medium leading-[108%] tracking-[-0.048rem] text-white backdrop-blur-[40px]"
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

        <div className="flex flex-col items-center gap-[3.2rem] text-white md:items-start">
          <CmbrLogoWhite />
          <div className="flex w-full flex-col items-center justify-between gap-16 md:flex-row md:items-end">
            <div className="flex flex-col items-center gap-0 text-white md:justify-end">
              <p className="p-sm-reg">
                🇺🇸 Made in the USA by a distributed team
              </p>
              <p className="p-sm-reg">
                from FL, NC, SC, NH, PA, TX, TN, and CA.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <p className="p-sm-bold">Contact:</p>
              <a href="mailto:newclient@cmbr.co" className="p-sm-reg underline">
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
  );
};

export default FooterContainer;
