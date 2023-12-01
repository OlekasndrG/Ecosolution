import styled from "styled-components";
import { tablet } from "../../Utils/Breakpoints/Breakpoints";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 2;
  top: 36px;
  right: 20px;
  width: calc(100% - 40px);
  min-height: 360px;
  height: calc(100vh - 60px);

  /* overflow: scroll; */
  padding: 24px;

  background-color: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  border-radius: 25px;

  @media screen and (min-width: ${tablet}) {
    width: 320px;
  }
`;
export const CrossContainer = styled.div`
  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  margin-bottom: 32px;

  padding: 0;

  font-size: 16px;

  letter-spacing: -0.64px;

  color: var(--white-text);
  background-color: transparent;
  border: none;
  transition: 0.4s ease;

  &:hover {
    transition: 0.4s ease;
    color: var(--primary-green-color);
  }

  &::after {
    content: "";
    position: absolute;
    display: block;
    bottom: -8px;
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background-color: rgba(255, 255, 255, 1);
  }
`;

export const NavContainer = styled.nav`
  display: flex;
`;
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const NavLink = styled.a`
  display: inline-block;
  width: 100%;
  color: rgba(255, 255, 255, 0.25);
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.96px;
  transition: 0.4s ease;

  &:hover {
    transition: 0.4s ease;
    color: var(--white-text);
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 8px;
`;

export const SocialLink = styled.a`
  color: var(--white-text);
  transition: 0.4s ease;

  &:hover {
    transition: 0.4s ease;
    color: var(--primary-green-color);
  }
`;
