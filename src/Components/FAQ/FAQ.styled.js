import { styled } from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
    flex-direction: row;
    gap: 24px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
    gap: 48px;
  }
`;

export const MobileTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  line-height: 1;

  @media screen and (min-width: ${tablet}) {
    display: none;
  }
`;

export const Section = styled.div`
  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;

export const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;

export const TabletTitle = styled.h2`
  display: none;

  @media screen and (min-width: ${tablet}) {
    display: block;
    font-size: 36px;
    line-height: 1;
  }

  @media screen and (min-width: ${desktop}) {
    width: 398px;
    font-size: 48px;
  }
`;

export const Contact = styled.div`
  margin-top: 36px;
  display: flex;

  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: -0.72px;

  @media screen and (min-width: ${desktop}) {
    font-size: 24px;
    line-height: 29px;
  }
`;
