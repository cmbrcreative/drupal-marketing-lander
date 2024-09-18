import { ctaConstants } from "./_ctaConstants";

const CTATrophies = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex gap-[4.7%]">
        <div>
          <img
            src={ctaConstants.trophies.trophyTopLeft.image}
            alt={ctaConstants.trophies.trophyTopLeft.alt}
            className="max-w-[13.6387rem] drop-shadow-lg sm:max-w-[17.2083rem] lg:max-w-[21.4566rem]"
          />
        </div>
        <img
          src={ctaConstants.trophies.trophyTopRight.image}
          alt={ctaConstants.trophies.trophyTopRight.alt}
          className="max-w-[13.6387rem] drop-shadow-lg sm:max-w-[17.2083rem] lg:max-w-[21.4566rem]"
        />
      </div>
      <img
        src={ctaConstants.trophies.trophyBottom.image}
        alt={ctaConstants.trophies.trophyBottom.alt}
        className="-mt-[2rem] ml-6 max-w-[17.2083rem] drop-shadow-lg sm:-mt-[3rem] sm:max-w-[23.2083rem] lg:-mt-[4rem] lg:max-w-[27.0583rem]"
      />
    </div>
  );
};

export default CTATrophies;
