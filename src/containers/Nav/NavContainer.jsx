import CmbrLogo from "../../assets/icons/CmbrLogo";
import NavCta from "./NavCta";

const Nav = () => {
  return (
    <div className="mx-auto mt-[2.1rem] flex max-w-[126rem] items-center justify-between p-4 py-[2.7rem] sticky top-0 z-50">
      <CmbrLogo className="w-[9.483rem]" />
      <NavCta />
    </div>
  );
};

export default Nav;
