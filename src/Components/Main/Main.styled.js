import styled from "styled-components";
import { tablet, desktop } from "../../Utils/Breakpoints/Breakpoints";
import { Link } from "react-scroll";
export const MainContainer = styled.section`
  margin-top: 222px;
  margin-bottom: 36px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 240px;
    margin-bottom: 100px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 264px;
    margin-bottom: 120px;
  }
`;

export const Container = styled.div`
  /* max-width: 320px; */
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--primary-green-color);
  /* margin-bottom: 24px; */
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: flex-start;
    /* margin-bottom: 16px; */
    justify-content: space-between;
  }

  @media screen and (min-width: ${desktop}) {
    justify-content: left;
    gap: 296px;
    /* margin-bottom: 12px; */
  }
`;

export const Title = styled.h1`
  width: 320px;
  font-size: 36px;
  line-height: 1;
  margin-bottom: 24px;
  text-transform: uppercase;

  @media screen and (min-width: ${tablet}) {
    width: 300px;
    font-size: 48px;

    margin-bottom: 0;
  }

  @media screen and (min-width: ${desktop}) {
    width: 485px;
    font-size: 64px;
  }
`;

export const DescriptionContainer = styled.div`
  @media screen and (min-width: ${tablet}) {
    width: 342px;
  }

  @media screen and (min-width: ${desktop}) {
    width: 363px;
  }
`;

export const Description = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--text-color);

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 43px;
  }

  @media screen and (min-width: ${desktop}) {
    margin-bottom: 20px;
  }
`;

export const LearnMoreLink = styled(Link)`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  font-size: 16px;
  line-height: 1.125;
  letter-spacing: -0.64px;

  border-radius: 500px;
  color: var(--primary-dark-color);
  border: 1px solid var(--primary-green-color);
  transition: var(--transition);

  &:hover {
    background-color: var(--primary-dark-color);
    color: var(--primary-green-color);
    border-color: var(--primary-dark-color);
  }
`;

export const Contacts = styled.ul`
  margin-top: 24px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${tablet}) {
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${desktop}) {
    margin-top: 12px;
  }
`;

export const ContactsItem = styled.li`
  font-size: 16px;
  letter-spacing: -0.64px;
  margin-bottom: 8px;

  &:last-child {
    display: none;
  }

  @media screen and (min-width: ${tablet}) {
    margin-bottom: 0;

    &:last-child {
      display: inline-block;
    }

    &:first-child {
      margin-right: 27px;
    }
  }

  @media screen and (min-width: ${desktop}) {
    &:first-child {
      margin-right: 325px;
    }
  }
`;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;

  @media screen and (min-width: ${tablet}) {
    height: 348px;
  }

  @media screen and (min-width: ${desktop}) {
    height: 524px;
  }
`;
