import { css } from '@emotion/react';
import Background from '@assets/images/bg-2.jpg';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;

  p {
    color: rgba(255, 255, 255, 0.8) !important;
  }
`;

export const styFlex = css`
  display: flex;
  justify-content: center;
`;
