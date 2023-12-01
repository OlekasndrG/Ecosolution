import PropTypes from "prop-types";
import Arrow from "../../Pictures/icons/arrow_Right_Up.svg?react";
import Instagram from "../../Pictures/icons/instagram.svg?react";
import Facebook from "../../Pictures/icons/facebook.svg?react";
import Cross from "../../Pictures/icons/cross.svg?react";
import {
  MenuContainer,
  CrossContainer,
  SocialContainer,
  NavContainer,
  NavList,
  SocialLink,
  NavLink,
} from "./Menu.styled";
export const Menu = ({ onClose }) => {
  return (
    <MenuContainer>
      <CrossContainer onClick={onClose}>
        <Cross />
        <span>Close</span>
      </CrossContainer>
      <NavContainer>
        <NavList>
          <li>
            <NavLink>
              <span>Main</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>About</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>Cases</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>FAQ</span> <Arrow />
            </NavLink>
          </li>
          <li>
            <NavLink>
              <span>Contact Us</span> <Arrow />
            </NavLink>
          </li>
        </NavList>
      </NavContainer>
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
    </MenuContainer>
  );
};
Menu.propTypes = {
  onClose: PropTypes.func.isRequired,
};
