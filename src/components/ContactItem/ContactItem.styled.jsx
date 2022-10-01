import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  border-left: ${({ theme }) => `4px solid ${theme.colors.green}`};
  border-radius: ${p => p.theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.contact};
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  &:not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const ContactName = styled.p`
  margin-right: 20px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const ContactDelete = styled.button`
  display: flex;
  width: 35px;
  height: 35px;
  align-items: center;
  justify-content: center;
  padding: 0;
  /* color: ${({ theme }) => theme.colors.white}; */
  border-style: none;
  border-radius: ${p => p.theme.radii.sm};
  outline: 1px solid ${({ theme }) => theme.colors.red};
  cursor: pointer;
  transition: background-color 300ms ease-in-out, transform 100ms ease-in-out;

  & svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.colors.red};
    transition: fill 300ms ease-in-out;
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colors.white};
  }

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.red};
  }
`;
