import CTAContent from "./CTAContent";
import CTATrophies from "./CTATrophies";

const CTASectionContainer = () => {
  return (
    <div className="mt-[6.4rem] rounded-[4.8rem] border-[#F7EFEC] bg-gradient-to-br from-white to-[#F7EFEC] px-[3.2rem] py-[6.4rem]">
      <div className="mx-auto flex max-w-[126rem] flex-col items-center justify-between gap-[4rem] lg:flex-row">
        <CTATrophies />
        <CTAContent />
      </div>
    </div>
  );
};

export default CTASectionContainer;
