import styled, { css } from 'styled-components';

const Button = styled.button`
  border: 1px solid transparent;
  outline: 0;
  background: transparent;
  cursor: pointer;
  letter-spacing: 1px;
  ${({ variant }) => {
    switch(variant) {
      case 'primary':
        return css`
          color: white;
          background-color: black;
          border-color: black;
          &:hover {
            background-color: #69B1BB;
            border-color: #69B1BB;
          }
        `;
      case 'secondary':
        return css`
          color: black;
          background-color: white;
          border-color: black;
          &:hover {
            color: #69B1BB;
            border-color: #69B1BB;
          }
        `;
        
      default:
        return ``;
    }
  }}
${({ size }) => {
    switch(size) {
      case 'lg':
        return css`
          font-size: 1rem;
          padding: 16px 18px;
          border-radius: 10px;
        `;
        
      default:
        return css`
          font-size: 1rem;
          padding: 8px 16px;
          border-radius: 5px;
        `;
    }
  }}
`;

export default Button;