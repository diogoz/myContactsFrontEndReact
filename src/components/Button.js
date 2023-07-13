import styled, { css } from 'styled-components';

export default styled.button`
  padding: 0px 16px;
  height: 52px;
  border: none;
  border-radius: 4px;
  color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.04);
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 16px;
  font-weight: bold;
  transition: background 0.2s ease-in ;

  &:hover{
  background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active{
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled]{
    background: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background-color: ${theme.colors.danger.main};

    &:hover{
      background: ${theme.colors.danger.light}
    }

    &:active{
      background: ${theme.colors.danger.dark}
    }

  `}
`;
