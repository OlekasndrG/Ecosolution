import {
  BurgerMenuContainer,
  Container,
  GetInTouch,
  HeaderContainer,
} from "./Header.styled";
import BurgerMenu from "../../Pictures/icons/menu.svg?react";

import Ellipse from "../../Pictures/icons/ellipse.svg?react";
import { useEffect, useState } from "react";
import { Modal } from "../../Utils/Modal/Modal";
import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import CustomLink from "../../Utils/Link/Link";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "visible";
  };

  // if (isOpen) {
  //   document.body.classList.add("no-overflow");
  // } else {
  //   document.body.classList.remove("no-overflow");
  // }
  return (
    <HeaderContainer scrolling={scrolling}>
      <Logo />
      <Container>
        <BurgerMenuContainer
          type="button"
          aria-label="toggle Modal menu"
          onClick={openModal}
        >
          <BurgerMenu />
        </BurgerMenuContainer>
        <GetInTouch>
          <CustomLink section={"contact_Us"}>
            <span>Get in touch</span>
            <Ellipse />
          </CustomLink>
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
