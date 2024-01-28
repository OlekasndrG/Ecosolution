import { styled } from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";

export const Container = styled.section`
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 120px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 28px;
  margin-bottom: 24px;

  @media screen and (min-width: ${tablet}) {
    font-size: 36px;
    line-height: 36px;
    width: 264px;
    margin-bottom: 0;
  }

  @media screen and (min-width: ${desktop}) {
    font-size: 48px;
    line-height: 48px;
    width: 398px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;
  color: rgba(23, 61, 51, 0.25);

  @media screen and (min-width: ${tablet}) {
    height: 66px;
    width: 363px;
    padding-left: 9px;
    border-left: 1px solid var(--primary-green-color);
  }

  @media screen and (min-width: ${desktop}) {
    height: 96px;
    width: 620px;
    padding-left: 161px;
  }
  & .swiper-pagination {
    position: static;
  }
  & .swiper-pagination-current {
    color: var(--text-color);
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 12px;

  @media screen and (min-width: ${desktop}) {
    gap: 24px;
  }
`;

export const Button = styled.button`
  width: 66px;
  height: 66px;
  padding: 0;
  border: none;
  background-color: transparent;
  color: var(--text-color);
  transition: var(--transition);

  &:hover {
    color: var(--primary-green-color);
  }

  @media screen and (min-width: ${desktop}) {
    width: 84px;
    height: 84px;
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;
