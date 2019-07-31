import styled from 'styled-components';
import { space } from 'styled-system';

const Button = styled.button`
  padding: 8px 16px;
  outline: none;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;
  transition: all ease-in-out 0.3s;

  ${space};

  &:hover {
    background-color: #eee;
  }
`;

export default Button;
