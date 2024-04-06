import styled from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 3;
  background-color: ${({ scrolling }) =>
    scrolling ? "white" : "var(--body-background)"};
  top: 0;
  left: 0;
  padding: 36px 20px 36px 20px;

  min-height: 40px;
  width: 100vw;
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

export const GetInTouch = styled.div`
  display: none;
  @media screen and (min-width: ${tablet}) {
    display: block;
  }
`;
