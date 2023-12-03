import styled from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";
import { Link } from "react-scroll";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 3;
  background-color: ${({ scrolling }) =>
    scrolling ? "white" : "var(--body-background)"};
  top: 0;
  left: 0;
  padding: 36px 20px 36px 20px;

  min-height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 360px;

  @media screen and (min-width: ${tablet}) {
    min-width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    min-width: ${desktop};
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
`;

export const BurgerMenuContainer = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 50%;
  border: none;
  background-color: var(--primary-light-color);
  transition: background-color 0.4s ease;

  &:hover {
    background-color: var(--primary-green-color);
  }
`;

export const GetInTouch = styled(Link)`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: inline-flex;
    padding: 10px 16px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    background-color: var(--primary-green-color);
    border: none;
    border-radius: 500px;

    color: var(--text-color);
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.64px;
    transition: var(--transition);
    &:hover {
      background-color: var(--primary-dark-color);
      color: var(--primary-green-color);
    }
  }
`;
