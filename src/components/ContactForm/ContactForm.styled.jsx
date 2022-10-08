import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[5]}px;
  border: ${p => `1px solid ${p.theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.background};
`;

export const Label = styled.label`
  display: inline-block;
  margin-bottom: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.lm};
  letter-spacing: 0.03em;
`;

export const Input = styled.input`
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[3]}px;
  width: 100%;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.03em;
  border: ${p => `1px solid ${p.theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.textPlaceholder};
    letter-spacing: 0.03em;
  }
`;

export const WrapName = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[5]}px;

  &:focus-within svg {
    fill: ${p => p.theme.colors.green};
  }

  & svg {
    position: absolute;
    left: 8px;
    fill: ${p => p.theme.colors.inputBorder};
    transition: fill 250ms ease-in-out;
  }

  &:hover svg {
    fill: ${p => p.theme.colors.green};
  }
`;

export const WrapNumber = styled(WrapName)``;

export const AddContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.green};
  border-style: none;
  border-radius: ${p => p.theme.radii.sm};
  cursor: pointer;
  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${p => p.theme.colors.greenHover};
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: ${p => p.theme.colors.lightGrey};
    transform: none;
    cursor: not-allowed;
  }
`;
