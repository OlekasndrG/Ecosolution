// import Up from "src/assets/icons/arrow-up.svg?react";
// import UpHover from "src/assets/icons/arrow-up-hover.svg?react";
import {
  FooterSection,
  ContactsItem,
  Contacts,
  FooterSocialContainer,
  FooterSocialLink,
  ContainerMobile,
  ArrowUp,
  InnerContainer,
  Container,
} from "./Footer.styled";
import Logo from "../Logo/Logo";
import Instagram from "../../Pictures/icons/instagram.svg?react";
import Facebook from "../../Pictures/icons/facebook.svg?react";
import { Link } from "react-scroll";
import WindowResizeHook from "../../Utils/Hooks/WindowResizeHook";

const Footer = () => {
  const windowwidth = WindowResizeHook();

  return (
    <FooterSection>
      {windowwidth < 767 ? (
        <ContainerMobile>
          <InnerContainer>
            <Logo />
            <Link to="main" smooth={true} duration={500} offset={-150}>
              <ArrowUp />
            </Link>
          </InnerContainer>
          <FooterSocialContainer>
            <FooterSocialLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </FooterSocialLink>
            <FooterSocialLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </FooterSocialLink>
          </FooterSocialContainer>
        </ContainerMobile>
      ) : (
        <Container>
          <Logo />
          <FooterSocialContainer>
            <FooterSocialLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </FooterSocialLink>
            <FooterSocialLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </FooterSocialLink>
          </FooterSocialContainer>
          <Link to="main" smooth={true} duration={500} offset={-150}>
            <ArrowUp />
          </Link>
        </Container>
      )}

      <Contacts>
        <ContactsItem>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactsItem>
        <ContactsItem>office@ecosolution.com</ContactsItem>
        <ContactsItem>ecosolution © 2023</ContactsItem>
      </Contacts>
    </FooterSection>
  );
};

export default Footer;
