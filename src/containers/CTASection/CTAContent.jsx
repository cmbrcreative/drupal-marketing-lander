import StyledButtonLink from "../../formComponents/StyledButton";
import { ctaConstants } from "./_ctaConstants";

const CTAContent = () => {
  return (
    <div className="flex w-full flex-col gap-[3.2rem] pb-[5rem] lg:max-w-[68.28335rem]">
      <div className="flex flex-col gap-[1.6rem]">
        {" "}
        <p className="p-sm-bold lg:p-norm-bold">{ctaConstants.title}</p>
        <h3 className="gradient-text-blue text-[3.2rem] font-medium leading-[3.456rem] tracking-[-0.032rem]">
          {ctaConstants.tagline}
        </h3>
      </div>
      <div>
        <p>
          {ctaConstants.descriptionParagraph1}
          <br />
          <br />
          {ctaConstants.descriptionParagraph2}
          <br />
          <br />
          {ctaConstants.descriptionParagraph3}
        </p>
      </div>
      <div className="flex flex-col items-center gap-[1.6rem]">
        <StyledButtonLink
          variant="ctaPrimary"
          fullWidth
          href="https://buy.stripe.com/fZe15kdCI6Q51k4aEE"
          target="_blank"
        >
          Start now at just $8k/mo.
        </StyledButtonLink>
        <a
          className="link-text px-[3.2rem] py-[2rem] text-[2rem]"
          href="#"
          target="_blank"
        >
          or let’s talk first
        </a>
      </div>
    </div>
  );
};

export default CTAContent;
