import { css } from '@emotion/react';
import Background from '@assets/images/bg-trans-cover.webp';

export const styWrapper = css`
  background-size: 500%;
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

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  animation: pulse 2s ease infinite;
  margin-top: -8px;
  border: none;

  .img__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: 500px;
    border-radius: 24px;
    background: #ab8252;
    padding: 8px 16px;
  }

  i {
    margin-right: 4px;
  }

  img {
    max-width: 28px;
    margin-right: 8px;
    margin-bottom: 0;
  }
`;
