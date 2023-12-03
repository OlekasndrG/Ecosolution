import PropTypes from "prop-types";
import Arrow from "../../Pictures/icons/arrow_BurgerMenu.svg?react";

import Cross from "../../Pictures/icons/cross.svg?react";

import {
  MenuContainer,
  CrossContainer,
  NavContainer,
  NavList,
  NavLink,
} from "./Menu.styled";
import Socials from "../Socials/Socials";
const Menu = ({ onClose }) => {
  //   const handleMenuClick = (e) => {
  //     console.log("asd");
  //     console.log(e.target);

  // setTimeout(() => {
  //   console.log("asdasdadad");
  //   onClose();
  // }, 1000);
  //   };
  return (
    <MenuContainer>
      <CrossContainer onClick={onClose}>
        <Cross />
        <span>Close</span>
      </CrossContainer>
      <NavContainer>
        <NavList>
          <li>
            <NavLink
              to="main"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              // onSetActive={() =>
              //   setTimeout(() => {
              //     console.log("asdasdadad");
              //     onClose();
              //   }, 1000)
              // }
              // activeStyle={{ color: "var(--primary-green-color)" }}
            >
              <span>Main</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
            >
              <span>About</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="cases"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              // onSetActive={() =>
              //   setTimeout(() => {
              //     console.log("asdasdadad");
              //     onClose();
              //   }, 1000)
              // }
            >
              <span>Cases</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="FAQ"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
            >
              <span>FAQ</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact_Us"
              smooth={true}
              spy={true}
              duration={500}
              offset={-150}
              onSetActive={() =>
                setTimeout(() => {
                  console.log("asdasdadad");
                  onClose();
                }, 1000)
              }
            >
              <span>Contact Us</span> <Arrow />
            </NavLink>
          </li>
        </NavList>
        {/* <p onClick={handleMenuClick}>sadsadadasdasd</p> */}
      </NavContainer>
      <Socials />
    </MenuContainer>
  );
};
Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
export default Menu;
