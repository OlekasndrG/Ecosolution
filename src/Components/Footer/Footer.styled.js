import { styled } from "styled-components";
import { desktop, tablet } from "../../Utils/Breakpoints/Breakpoints";
import { SocialLink, SocialContainer } from "../Socials/Socials.styled";
import Arrow from "../../Pictures/icons/arrow_Up.svg?react";

export const FooterSection = styled.footer`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${tablet}) {
    padding: 40px 0;
    gap: 16px;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ContainerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;
export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 19px;
  width: 100%;
`;
export const Contacts = styled.ul`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  @media screen and (min-width: ${tablet}) {
    margin-top: 16px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactsItem = styled.li`
  font-size: 16px;
  letter-spacing: -0.64px;

  @media screen and (min-width: ${tablet}) {
    &:first-child {
      margin-right: 77px;
    }
  }
  @media screen and (min-width: ${desktop}) {
    &:first-child {
      margin-right: 325px;
    }
  }
`;

export const FooterSocialContainer = styled(SocialContainer)`
  margin: 0;

  @media screen and (min-width: ${tablet}) {
    margin-right: 97px;
  }
  @media screen and (min-width: ${desktop}) {
    margin-left: 245px;
  }
`;
export const FooterSocialLink = styled(SocialLink)`
  color: var(--text-color);
`;
export const ArrowUp = styled(Arrow)`
  width: 32px;
  height: 32px;
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
