import CmbrLogo from "../../assets/icons/CmbrLogo";
import NavCta from "./NavCta";

const Nav = () => {
  return (
    <div className="flex justify-between items-center p-4 max-w-[126rem] mx-auto py-[2.7rem] mt-[2.1rem]">
      <CmbrLogo className="w-[9.483rem]" />
      <NavCta />
    </div>
  );
};

export default Nav;
