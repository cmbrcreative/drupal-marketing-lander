import Headline from "../components/Hero/Headline";
import HeroForm from "../components/Hero/HeroForm";
import SchedulingFrom from "../components/Hero/SchedulingFrom";

const Hero = () => {
  return (
    <div className="mx-auto mt-[5.7rem] flex max-w-[126rem] flex-col gap-[1.6rem]">
      <SchedulingFrom />
      <div className="flex flex-col justify-evenly gap-[4rem] sm:flex-row md:justify-center lg:justify-between md:gap-[2.4rem]">
        <div className="flex-1 xl:basis-[60%]">
          <Headline />
        </div>
        <div className="flex-1 flex justify-end xl:basis-[40%]">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
