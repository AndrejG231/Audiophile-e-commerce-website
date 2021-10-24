import React, { FC, useState } from "react";
import styled from "styled-components";
import { Subscribe } from "unstated";
import Checkout from "../../states/Checkout";

const InputContainer = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  display: block;
  ${({ theme }) => theme.fonts.manrope};
  font-size: 0.75rem;
  font-weight: 700;
`;

const InputArea = styled.input`
  width: 100%;
  margin-top: 9px;
  height: 56px;
  line-height: 56px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.grayLine};
  padding-left: 24px;
  ${({ theme }) => theme.fonts.manrope};
  font-weight: 700;
  font-size: 0.875rem;
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
};

export const InputField: FC<props> = ({ identifier }) => {
  const error = "";
  const [value, setValue] = useState("");

  return (
    <Subscribe to={[Checkout]}>
      {(checkout: Checkout) => (
        <InputContainer>
          <InputLabel htmlFor={identifier}>{identifier}</InputLabel>
          <InputError>Wrong format</InputError>
          <InputArea
            value={value}
            id={identifier}
            name={identifier}
            placeholder={identifier}
            type="text"
            onChange={(event) => setValue(event.target.value)}
          />
        </InputContainer>
      )}
    </Subscribe>
  );
};
