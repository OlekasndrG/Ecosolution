import { styled } from "styled-components";
import { mobile, tablet, desktop } from "./Utils/Breakpoints/Breakpoints";

export const MainContainer = styled.div`
  min-width: 360px;
  /* max-width: ${mobile}; */
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: ${tablet}) {
    /* max-width: none; */
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;
