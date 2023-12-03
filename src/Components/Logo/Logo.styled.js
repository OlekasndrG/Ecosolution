import { styled } from "styled-components";

export const LogoContainer = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: space-between;
  transition: var(--transition);
  color: var(--primary-dark-color);
  &:hover {
    color: var(--primary-green-color);
  }
`;
