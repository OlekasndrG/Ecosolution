import {
  BurgerMenuContainer,
  Container,
  GetInTouch,
  HeaderContainer,
  LogoContainer,
} from "./Header.styled";
import BurgerMenu from "../../Pictures/menu.svg?react";
import LogoName from "../../Pictures/logo_Name.svg?react";
import LogoText from "../../Pictures/logo_Text.svg?react";
import LogoSVG from "../../Pictures/logo.svg?react";
import Ellipse from "../../Pictures/ellipse.svg?react";
import { useState } from "react";
import { Modal } from "../../Utils/Modal/Modal";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoSVG />
        <LogoName />
        <LogoText />
      </LogoContainer>
      <Container>
        <BurgerMenuContainer onClick={openModal}>
          <BurgerMenu />
        </BurgerMenuContainer>
        <GetInTouch>
          <span>Get in touch</span>
          <Ellipse />
        </GetInTouch>
      </Container>
      {showModal && (
        <Modal onClose={closeModal}>
          <p>sss</p>
        </Modal>
      )}
    </HeaderContainer>
  );
};
export default Header;
