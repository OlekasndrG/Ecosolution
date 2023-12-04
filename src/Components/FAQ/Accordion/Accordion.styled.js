import { styled } from "styled-components";
import { desktop, tablet } from "../../../Utils/Breakpoints/Breakpoints";

export const Card = styled.div`
  padding: 16px 0;
  border-top: 1px solid var(--primary-green-color);

  @media screen and (min-width: ${desktop}) {
    padding: 24px 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export const QuestionBlock = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;

  text-align: justify;
  font-size: 18px;
  line-height: 1.22;
  letter-spacing: -0.72px;

  & svg {
    height: 16px;
    width: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    gap: 16px;

    & svg {
      height: 28px;
      width: 28px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    gap: 24px;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.96px;
  }
`;

export const Answer = styled.div`
  margin-top: 16px;
  padding-left: 24px;

  text-align: justify;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: -0.56px;

  @media screen and (min-width: ${tablet}) {
    padding-left: 44px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: -0.64px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-left: 52px;
  }
`;
