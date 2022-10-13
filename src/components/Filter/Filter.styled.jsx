import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${p => p.theme.colors.background};
`;

export const Wrapper = styled.div`
  position: relative;

  & svg {
    position: absolute;
    top: 5px;
    left: 6px;
    fill: ${p => p.theme.colors.inputBorder};
  }
`;

export const FilterLabel = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
  letter-spacing: 0.02em;
`;

export const InputSearch = styled.input`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[6]}px;
  padding-right: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  letter-spacing: 0.03em;
  border: ${p => `1px solid ${p.theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${p => p.theme.colors.textPlaceholder};
    letter-spacing: 0.03em;
  }

  &:focus {
    outline: ${p => `2px solid ${p.theme.colors.lightBlue}`};
    border-color: transparent;
  }
`;

export const CountDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: ${p => p.theme.colors.inputBorder};
  border-radius: ${p => p.theme.radii.sm};
`;

export const Text = styled.p`
  color: ${p => p.theme.colors.white};
`;

export const Count = styled.p`
  font-size: ${p => p.theme.fontSizes.xm};
  font-weight: ${p => p.theme.fontWeights.lightBold};
  line-height: ${p => p.theme.lineHeights.text};
  color: ${p => p.theme.colors.white};
`;
