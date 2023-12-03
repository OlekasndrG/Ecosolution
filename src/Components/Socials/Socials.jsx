import Instagram from "../../Pictures/icons/instagram.svg?react";
import Facebook from "../../Pictures/icons/facebook.svg?react";
import { SocialContainer, SocialLink } from "./Socials.styled";

const Socials = () => {
  return (
    <SocialContainer>
      <SocialLink
        href="https://www.instagram.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </SocialLink>
      <SocialLink
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </SocialLink>
    </SocialContainer>
  );
};

export default Socials;
