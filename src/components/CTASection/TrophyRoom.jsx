import ClutchDrupal from "../../assets/images/ClutchDrupal.png";
import ClutchGlobal from "../../assets/images/ClutchGlobal.png";
import ClutchUX from "../../assets/images/ClutchUX.png";

const TrophyRoom = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex gap-[4.7%]">
        <div>
          <img
            src={ClutchDrupal}
            alt="Clutch Drupal"
            className="max-w-[13.6387rem] sm:max-w-[17.2083rem] lg:max-w-[21.4566rem] drop-shadow-lg"
          />
        </div>
        <img
          src={ClutchUX}
          alt="Clutch UX"
          className="max-w-[13.6387rem] sm:max-w-[17.2083rem] lg:max-w-[21.4566rem] drop-shadow-lg"
        />
      </div>
      <img
        src={ClutchGlobal}
        alt="Clutch Global"
        className="-mt-[2rem] sm:max-w-[23.2083rem] sm:-mt-[3rem] lg:-mt-[4rem] ml-6 max-w-[17.2083rem] lg:max-w-[27.0583rem] drop-shadow-lg"
      />
    </div>
  );
};

export default TrophyRoom;
