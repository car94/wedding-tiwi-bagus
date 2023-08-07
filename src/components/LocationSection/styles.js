import { css } from '@emotion/react';
import Background from '@assets/images/gold-ribbons-white-marble-social-template.jpg';

export const styWrapper = css`
  background-size: cover;
  background-image: url(${Background});
  background-position: center;
  @media screen and (max-width: 400px) {
    .sub-title {
      font-size: 16px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }
`;
