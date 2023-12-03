import LogoName from "../../Pictures/icons/logo_Name.svg?react";
import LogoText from "../../Pictures/icons/logo_Text.svg?react";
import LogoSVG from "../../Pictures/icons/logo.svg?react";
import { LogoContainer } from "./Logo.styled";
const Logo = () => {
  return (
    <LogoContainer>
      <LogoSVG />
      <LogoName />
      <LogoText />
    </LogoContainer>
  );
};
export default Logo;
