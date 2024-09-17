import React from "react";
import AcquiaLogo from "../assets/logos/AcquiaLogo";
import PantheonLogo from "../assets/logos/PantheonLogo";
import { Squircle } from "@squircle-js/react";

const CertificationsContainer = () => {



  return (
    <Squircle
      cornerRadius={50}
      cornerSmoothing={1}
      className="p-4 bg-black text-white flex items-center justify-center"
    
      style={{
        // clipPath: `path('${svgPath}')`,
        backgroundBlendMode: "overlay, hard-light, normal",
        background:
          "linear-gradient(102deg, #0085A2 0%, #4C00C9 100%), rgba(0, 0, 0, 0.80)",
      }}
    >
      <div className="max-w-[71.2rem] text-center flex flex-col gap-[1.6rem] lg:mb-[2.4rem] lg:gap-[2.4rem] p-[4.8rem] lg:py-[12.8rem]">
        <h2 className="gradient-text-green">
          Qualified. Bonafide. Certified Drupal experts.
        </h2>
        <p className="text-white p-norm-reg lg:p-xl-reg">
          Members of the Camber team hold Acquia certifications for their Drupal
          expertise, and have worked on some of the highest-profile Drupal sites
          in the world throughout their careers.
        </p>
        <div className="py-[2.4rem] flex items-center justify-evenly flex-col lg:flex-row gap-[2.4rem]"><AcquiaLogo /><PantheonLogo /></div>
      </div>
    </Squircle>
  );
};

export default CertificationsContainer;
