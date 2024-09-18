import { globalConstants } from "../../_GlobalConstants/globalConstants";

const Headline = () => {
  return (
    <div className="flex flex-col gap-[.8rem] md:gap-[1.6rem] xl:max-w-[753px]">
      <h1 className="h1-sm sm:h1-reg xl:h1-xl gradient-text-blue text-black">
        {globalConstants.hero.titlePlain}{" "}
        <span className="text-transparent">
          {globalConstants.hero.titleHighlighted}
        </span>
      </h1>
      <p className="p-lg-reg xl:p-xl-reg">{globalConstants.hero.tagline}</p>
    </div>
  );
};

export default Headline;
