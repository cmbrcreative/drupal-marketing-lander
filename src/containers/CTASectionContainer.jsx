import TrophyRoom from "../components/CTASection/TrophyRoom";
import CTASection from "../components/CTASection/CTASection";

const CTASectionContainer = () => {
  return (
    <div className=" bg-gradient-to-br from-white to-[#F7EFEC] rounded-[4.8rem] border-[#F7EFEC] py-[6.4rem] px-[3.2rem] mt-[6.4rem]">
      <div className="flex justify-between max-w-[126rem] mx-auto items-center flex-col lg:flex-row gap-[4rem] ">
        <TrophyRoom />
        <CTASection />
      </div>
    </div>
  );
};

export default CTASectionContainer;
