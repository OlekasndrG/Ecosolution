import LogoName from "../../Pictures/icons/logo_Name.svg?react";
import LogoText from "../../Pictures/icons/logo_Text.svg?react";
import LogoSVG from "../../Pictures/icons/logo.svg?react";
import { LogoContainer } from "./Logo.styled";
const Logo = () => {
  return (
    <LogoContainer
      href="https://www.ecosolution.com/main"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoSVG />
      <LogoName />
      <LogoText />
    </LogoContainer>
  );
};
export default Logo;
