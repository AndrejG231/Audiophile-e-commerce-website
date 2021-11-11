import React, { FC } from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";
import { inputGroups } from "../../constants";
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
        border: 1px solid ${theme.colors.error};
        &:hover {
            border: 1px solid ${theme.colors.error};
        }
        &:focus {
            border: 1px solid ${theme.colors.error};
        }
        `;
    }
    return `border: 1px solid ${theme.colors.grayLine};`;
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
              id={identifier + "-input"}
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

// Select Input
const SelectContainer = styled.div<{ margin: boolean; selected: boolean }>`
  width: 100%;
  margin-top: 9px;
  height: 56px;
  line-height: 56px;
  border-radius: 8px;
  padding-left: 16px;
  margin-top: 16px;
  margin-bottom: ${({ margin }) => (margin ? 32 : 0)}px;
  position: relative;
  ${({ theme, selected }) =>
    selected
      ? `border: 1px solid ${theme.colors.brown}`
      : `border: 1px solid ${theme.colors.grayLine};`}
`;

const SelectBox = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.grayLine};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 999px;
`;

const Selector = styled.input.attrs(() => ({ type: "radio" }))`
  cursor: pointer;
  border-radius: 999px;
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  z-index: 5;
  opacity: 0;
`;

const SelectView = styled.div<{ selected: boolean }>`
  border-radius: 999px;
  width: 10px;
  height: 10px;
  border: none;
  background: ${({ selected, theme }) => (selected ? theme.colors.brown : "")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  &:hover,
  &:focus,
  &:focus-visible {
    outline: none;
  }
`;

const SelectLabel = styled.label`
  ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  cursor: pointer;
  font-size: 0.875rem;
  margin-left: 36px;
`;

export const SelectField: FC<{
  identifier: string;
  label?: string;
  margin?: boolean;
}> = ({ identifier, label = identifier, margin = false }) => {
  return (
    <Subscribe to={[Checkout]}>
      {(checkout: Checkout) => {
        const payMethod = checkout.state.boolInputs[inputGroups.payMethod];

        return (
          <SelectContainer
            margin={margin}
            onClick={() => checkout.select(inputGroups.payMethod, identifier)}
            selected={payMethod === identifier}
          >
            <SelectBox>
              <Selector
                name={identifier}
                checked={payMethod === identifier}
                onChange={() => null}
              />
              <SelectView selected={payMethod === identifier} />
            </SelectBox>
            <SelectLabel htmlFor={identifier}>{label}</SelectLabel>
          </SelectContainer>
        );
      }}
    </Subscribe>
  );
};
