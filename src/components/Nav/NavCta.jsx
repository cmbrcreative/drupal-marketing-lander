import StyledButton from "../FormComponents/StyledButton";

const NavCta = () => {
  return (
    <div className="flex items-center gap-[1.6rem]">
      <a href="" className="link-text hidden sm:block">Let&apos;s Talk</a> <span className="font-suisse text-[1rem] font-semibold leading-[168%] text-black hidden sm:block">-or-</span>
      <StyledButton variant="navCta">Start now at $8k/mo.</StyledButton>
    </div>
  );
};

export default NavCta;
