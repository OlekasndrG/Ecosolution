import {
  BurgerMenuContainer,
  Container,
  GetInTouch,
  HeaderContainer,
  LogoContainer,
} from "./Header.styled";
import BurgerMenu from "../../Pictures/icons/menu.svg?react";
import LogoName from "../../Pictures/icons/logo_Name.svg?react";
import LogoText from "../../Pictures/icons/logo_Text.svg?react";
import LogoSVG from "../../Pictures/icons/logo.svg?react";
import Ellipse from "../../Pictures/icons/ellipse.svg?react";
import { useEffect, useState } from "react";
import { Modal } from "../../Utils/Modal/Modal";
import { Menu } from "../Menu/Menu";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const [scrolling, setScrolling] = useState(undefined);
  function listenScrollEvent() {
    if (window.scrollY > 20) {
      setScrolling(1);
    } else {
      setScrolling(undefined);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", listenScrollEvent);
    }

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  //  if (isOpen) {
  //    document.body.classList.add("no-overflow");
  //  } else {
  //    document.body.classList.remove("no-overflow");
  //  }

  // eslint-disable-next-line no-unused-vars

  return (
    <HeaderContainer scrolling={scrolling}>
      <LogoContainer>
        <LogoSVG />
        <LogoName />
        <LogoText />
      </LogoContainer>
      <Container>
        <BurgerMenuContainer onClick={openModal}>
          <BurgerMenu />
        </BurgerMenuContainer>
        <GetInTouch href="#Contact_us">
          <span>Get in touch</span>
          <Ellipse />
        </GetInTouch>
      </Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <Menu onClose={closeModal} />
        </Modal>
      )}
    </HeaderContainer>
  );
};
export default Header;
