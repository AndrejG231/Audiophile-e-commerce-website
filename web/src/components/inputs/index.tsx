import React, { FC, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { Subscribe } from "unstated";
import Checkout from "../../states/Checkout";
import checkoutInputCheck from "../../util/checkoutInputsCheck";

const InputContainer = styled.div`
  position: relative;
  margin-bottom: 24px;
`;

type inputProps = {
  isErr?: boolean;
};

const InputLabel = styled.label<inputProps>`
  display: block;
  ${({ theme }) => theme.fonts.manrope};
  font-size: 0.75rem;
  font-weight: 700;
`;

const InputArea = styled.input<inputProps>`
  outline: none;
  width: 100%;
  margin-top: 9px;
  height: 56px;
  line-height: 56px;
  border-radius: 8px;
  padding-left: 24px;
  ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  cursor: pointer;
  font-size: 0.875rem;
  caret-color: ${({ theme }) => theme.colors.brown};
  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.lightBrown};
  }
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.brown};
  }
  ${({ theme, isErr }) => {
    if (isErr) {
      return `
        border: 2px solid ${theme.colors.error};
        &:hover {
            border: 2px solid ${theme.colors.error};
        }
        &:focus {
            border: 2px solid ${theme.colors.error};
        }
        `;
    }
    return `border: 2px solid ${theme.colors.grayLine};`;
  }}
`;

const InputError = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  ${({ theme }) => theme.fonts.manrope};
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.error};
`;

type props = {
  identifier: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "number" | "password";
};

export const InputField: FC<props> = ({
  identifier,
  label = identifier,
  placeholder = label,
  type = "text",
}) => {
  return (
    <Subscribe to={[Checkout]}>
      {(checkout: Checkout) => {
        const { value, error } = checkout.state.textInputs[identifier]
          ? checkout.state.textInputs[identifier]
          : { value: "", error: "" };

        return (
          <InputContainer>
            <InputLabel
              isErr={!!error}
              htmlFor={identifier}
              id={identifier + "-id"}
            >
              {label}
            </InputLabel>
            <InputError>{error}</InputError>
            <InputArea
              type={type}
              isErr={!!error}
              onBlur={() => {
                checkoutInputCheck(identifier, value, (error) =>
                  checkout.setError(identifier, error)
                );
              }}
              onChange={(event) =>
                checkout.setValue(identifier, event.target.value)
              }
              value={value}
              name={identifier}
              placeholder={placeholder}
            />
          </InputContainer>
        );
      }}
    </Subscribe>
  );
};
