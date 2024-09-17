import StyledButton from "../FormComponents/StyledButton";

const CTASection = () => {

  return (
    <div className="w-full  pb-[5rem] lg:max-w-[68.28335rem] flex flex-col gap-[3.2rem]">
      <div className="flex flex-col gap-[1.6rem]">
        {" "}
        <p className="p-sm-bold lg:p-norm-bold">
          If we may be so bold...
        </p>
        <h3 className=" text-[3.2rem] font-medium leading-[3.456rem] tracking-[-0.032rem] gradient-text-blue">
          We think you’re here because, like us, you believe that Drupal
          projects worth doing are worth doing well.
        </h3>
      </div>
      <div>
        <p>
          Supercharge your Drupal project from day 1-with any mix of strategy,
          design, or development that you need-by securing our minimum team size
          with just $8,000 per week.
          <br />
          <br />
          When you’re ready for more, we’ll ramp up your team to the appropriate
          size for your project, budget, and timeline.
          <br />
          <br />
          If you change your mind, cancel any time month-to-month.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[1.6rem]">
        <StyledButton variant="ctaPrimary" fullWidth>
          Start now at just $8k/mo.
        </StyledButton>
        <p className="link-text text-[2rem] px-[3.2rem] py-[2rem]">or let’s talk first</p>
      </div>
    </div>
  );
};

export default CTASection;
