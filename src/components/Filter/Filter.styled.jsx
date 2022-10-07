import styled from 'styled-components';

export const Container = styled.div`
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
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: ${p => p.theme.radii.sm};

  &::placeholder {
    font-size: ${p => p.theme.fontSizes.s};
    color: ${({ theme }) => theme.colors.textPlaceholder};
    letter-spacing: 0.03em;
  }
`;
