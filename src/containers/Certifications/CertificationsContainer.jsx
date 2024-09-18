import { Squircle } from "@squircle-js/react";
import { certificationsConstants } from "./_certificationsConstants";

const CertificationsContainer = () => {



  return (
    <Squircle
      cornerRadius={50}
      cornerSmoothing={1}
      className="p-4 bg-black text-white flex items-center justify-center"
    
      style={{
        backgroundBlendMode: "overlay, hard-light, normal",
        background:
          "linear-gradient(102deg, #0085A2 0%, #4C00C9 100%), rgba(0, 0, 0, 0.80)",
      }}
    >
      <div className="max-w-[71.2rem] text-center flex flex-col gap-[1.6rem] lg:mb-[2.4rem] lg:gap-[2.4rem] p-[4.8rem] lg:py-[12.8rem]">
        <h2 className="gradient-text-green">
          {certificationsConstants.title}
        </h2>
        <p className="text-white p-norm-reg lg:p-xl-reg">
          {certificationsConstants.description}
        </p>
        <div className="py-[2.4rem] flex items-center justify-evenly flex-col lg:flex-row gap-[2.4rem]">
          {certificationsConstants.logos.map((Logo, index) => (
            <Logo key={index} />
          ))}
        </div>
      </div>
    </Squircle>
  );
};

export default CertificationsContainer;
