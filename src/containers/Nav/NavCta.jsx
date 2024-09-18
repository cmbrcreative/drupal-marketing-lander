import { globalConstants } from "../../_GlobalConstants/globalConstants";
import StyledButtonLink from "../../formComponents/StyledButton";

const NavCta = () => {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <a href="" className="link-text hidden sm:block">
        Let&apos;s Talk
      </a>{" "}
      <span className="hidden font-suisse text-[1rem] font-semibold leading-[168%] text-black sm:block">
        -or-
      </span>
      <StyledButtonLink
        variant="navCta"
        href={globalConstants.buyNowLink}
        target="_blank"
      >
        {globalConstants.buyNowLinkText}
      </StyledButtonLink>
    </div>
  );
};

export default NavCta;
