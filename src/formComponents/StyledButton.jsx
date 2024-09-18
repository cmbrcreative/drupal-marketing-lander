const StyledButtonLink = ({
  variant = "primary",
  fullWidth = false,
  children,
  ...props
}) => {
  const variantClasses = {
    primary:
      "relative blue-gradient text-white py-[1.2rem] px-[3.2rem] after:absolute after:inset-0 after:bg-gradient-blurple after:rounded-[1.2rem] after:z-[-1] after:animate-pulse-in after:content-[''] after:transition-all after:duration-250 hover:after:blur-[5px] hover:after:opacity-75 active:after:blur-[3px] active:after:opacity-75",
    ctaPrimary:
      "relative blue-gradient text-white py-[2rem] px-[3.2rem] text-[2rem] tracking-[-0.02rem] after:-z-[1] after:absolute after:inset-0 after:bg-gradient-blurple after:rounded-[1.2rem]  after:animate-pulse-in after:content-[''] after:transition-all after:duration-250 hover:after:blur-md hover:after:opacity-75",
    ctaSecondary:
      "bg-transparent gradient-text-blue py-[2rem] rounded-[1.2rem] [border-image:linear-gradient(to_right,#0085A2,#4C00C9)_1] border px-[3.2rem]",
    secondary: "text-white bg-transparent px-[3.2rem]",
    navCta:
      "relative blue-gradient text-white py-[1.2rem] px-[1.6rem] after:absolute after:inset-0 after:bg-gradient-blurple after:rounded-[1.2rem] after:z-[-1] after:animate-pulse-in after:content-[''] after:transition-all after:duration-250 hover:after:blur-[5px] hover:after:opacity- active:after:blur-[3px] active:after:opacity-75",
  };
  return (
    <a
      className={`${fullWidth ? "w-full" : ""} ${variantClasses[variant]} cursor-pointer inline-block rounded-[1.2rem] text-center font-rebond text-[1.4rem] font-bold leading-[1.4rem]`}
      {...props}
    >
      {children}
    </a>
  );
};

export default StyledButtonLink;
