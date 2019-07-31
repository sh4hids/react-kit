import styled, { css } from 'styled-components';
import { space } from 'styled-system';

const Container = styled.div`
  ${space};

  ${({ variant }) => {
    switch (variant) {
      case 'fixed':
        return css`
          max-width: 960px;
          margin: 0 auto;
        `;
      default:
        return css`
          width: 100%;
        `;
    }
  }};
`;

export default Container;
