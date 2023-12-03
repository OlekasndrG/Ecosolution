import { styled } from "styled-components";
import { tablet, desktop } from "../../../Utils/Breakpoints/Breakpoints";
import Arrow from "../../../Pictures/icons/arrow_Right_Up.svg?react";
export const SlideCard = styled.div``;

export const ImageHolder = styled.div`
  height: 168px;

  @media screen and (min-width: ${desktop}) {
    height: 296px;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  padding: 0 12px;
  background-color: var(--bg-section-color);

  @media screen and (min-width: ${desktop}) {
    padding: 0 48px;
    height: 210px;
  }
`;

export const Name = styled.div`
  height: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--primary-green-color);

  @media screen and (min-width: ${desktop}) {
    height: 130px;
  }
`;

export const Text = styled.div`
  & p {
    max-width: 230px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.72px;

    @media screen and (min-width: ${desktop}) {
      max-width: 380px;
    }
  }
`;

export const ArrowLink = styled(Arrow)`
  rect {
    fill: var(--primary-green-color);
  }

  path {
    stroke: var(--primary-dark-color);
  }

  transition: var(--transition);

  &:hover {
    rect {
      fill: var(--primary-dark-color);
    }

    path {
      stroke: var(--primary-green-color);
    }
  }
`;

export const Type = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;

  & p {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: -0.48px;

    @media screen and (min-width: ${tablet}) {
      font-size: 14px;
      line-height: 17px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 16px;
      line-height: 19px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    padding: 36px 0 24px;
  }
`;
