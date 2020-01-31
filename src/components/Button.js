import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  height: 40px;
  margin: 8px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  background-image: linear-gradient(#10a2ea, #0f99e8);
  font-weight: 900;
  font-style: normal;
  color: #ffffff;

  &:hover {
    opacity: 0.5;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
