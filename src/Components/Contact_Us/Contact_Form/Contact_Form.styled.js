import { styled } from "styled-components";

import { Form, Field } from "formik";
import { tablet, desktop } from "../../../Utils/Breakpoints/Breakpoints";

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 36px 24px;
  background-color: var(--bg-section-color);

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 24px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - 48px) / 2);
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.64px;
  margin-bottom: 8px;
`;

export const FormInput = styled(Field)`
  margin-bottom: 24px;
  padding-bottom: 8px;

  color: inherit;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.72px;

  border: transparent;
  outline: none;
  background-color: inherit;
  border-bottom: ${({ errors }) =>
    errors
      ? "1px solid rgba(210, 139, 139, 1)"
      : "1px solid var(--primary-green-color)"};

  &::-webkit-input-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &::-ms-input-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &::-moz-placeholder {
    font-family: "Fira Sans", Arial, Helvetica, sans-serif;
    color: #bdbdbd;
  }

  &.form-textarea {
    resize: none;
    min-height: 124px;
  }
`;

export const FormikError = styled.p`
  position: absolute;
  top: 70px;
  right: 0;
  color: rgba(210, 139, 139, 1);
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: -0.48px;
`;
export const Button = styled.button`
  display: inline-flex;
  height: 40px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background-color: inherit;

  font-size: 16px;
  line-height: 18px;
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
