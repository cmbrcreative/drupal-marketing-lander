import { constants } from "../../constants/textConstants";

const Headline = () => {
  return (
    <div className="flex flex-col gap-[.8rem] md:gap-[1.6rem] xl:max-w-[753px]">
      <h1 className="h1-sm sm:h1-reg xl:h1-xl gradient-text-blue text-black">
        {constants.hero.titlePlain}{" "}
        <span className="text-transparent">
          {constants.hero.titleHighlighted}
        </span>
      </h1>
      <p className="p-lg-reg xl:p-xl-reg">{constants.hero.tagline}</p>
    </div>
  );
};

export default Headline;
