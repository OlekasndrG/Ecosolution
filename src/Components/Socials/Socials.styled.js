import styled from "styled-components";
export const SocialContainer = styled.div`
  display: flex;
  margin-top: auto;
  gap: 8px;
`;

export const SocialLink = styled.a`
  color: var(--text-menu-white);
  transition: var(--transition);

  &:hover {
    color: var(--primary-green-color);
  }
`;
