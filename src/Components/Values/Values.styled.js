import { styled } from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";
import { Container, Description } from "../Main/Main.styled";

export const SectionContainer = styled.section`
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const DescriptionContainer = styled(Container)`
  border-bottom: none;

  @media screen and (min-width: ${tablet}) {
    justify-content: space-between;
    gap: 82px;
  }

  @media screen and (min-width: ${desktop}) {
    gap: 254px;
  }
`;
export const ValuesTitle = styled.h2`
  width: 320px;
  font-size: 36px;
  line-height: 1;
  margin-bottom: 24px;
  text-transform: uppercase;

  font-size: 28px;
  @media screen and (min-width: ${tablet}) {
    width: 272px;

    font-size: 36px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 365px;
    font-size: 48px;
  }
`;
export const ValuesDescription = styled(Description)`
  text-align: justify;
  @media screen and (min-width: ${tablet}) {
    width: 353px;
    padding-left: 11px;
    border-left: 1px solid var(--primary-green-color);
  }

  @media screen and (min-width: ${desktop}) {
    padding-left: 161px;
    width: 620px;
  }
`;

export const ValuesContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: ${tablet}) {
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${desktop}) {
    gap: 48px;
  }
`;
export const Item = styled.div`
  padding: 13px 12px 12px 12px;
  background-color: var(--bg-section-color);
  height: 197px;
  @media screen and (min-width: ${desktop}) {
    height: 339px;
    padding: 48px 24px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 33px;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 51px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 94px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  line-height: 1.5;

  @media screen and (min-width: ${tablet}) {
    font-size: 18px;
    line-height: 1.33;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 32px;
    line-height: 1.5;
  }
`;

export const TextContainer = styled.div`
  border-top: 1px solid var(--primary-green-color);
  padding-top: 12px;
  & p {
    text-align: justify;
    font-size: 14px;
    letter-spacing: -0.56px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 24px;

    & p {
      font-size: 16px;
    }
  }
`;

export const Picture = styled(Item)`
  display: none;
  @media screen and (min-width: ${tablet}) {
    padding: 0;
    display: block;
    grid-column: span 2;
    & img {
      width: 100%;
      height: 100%;
    }
  }
`;
