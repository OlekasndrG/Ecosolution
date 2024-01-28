import { styled } from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
    line-height: 36px;
    width: 368px;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 48px;
    line-height: 48px;
    width: 491px;
  }
`;

export const Border = styled.div`
  width: 1px;
  height: 48px;
  border-right: 1px solid var(--primary-green-color);
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    height: 87px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-bottom: 17px;
  }
`;

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* width: 948px; */

  & h4 {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    color: var(--primary-green-color);

    @media screen and (min-width: ${tablet}) {
      font-size: 100px;
      line-height: 100px;
    }

    @media screen and (min-width: ${desktop}) {
      width: 822px;

      padding-left: ${(props) =>
        props.$paddingLeft ? props.$paddingLeft : "0"};
      font-size: ${(props) => (props.$fontSize ? props.$fontSize : "164px")};
      background-color: ${(props) => (props.colors ? props.colors : "red")};
      line-height: 164px;
    }
  }

  & span {
    font-family: "Oswald", sans-serif;
    font-size: 24px;
    line-height: 24px;

    @media screen and (min-width: ${tablet}) {
      font-size: 28px;
      line-height: 48px;
    }

    @media screen and (min-width: ${desktop}) {
      font-size: 48px;
    }
  }
`;
