import { css, keyframes } from '@emotion/react';
import Background from '@assets/images/bg-trans-cover.webp';

export const styWrapper = css`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 70vh;
  color: #000 !important;

  .sub-title {
    color: #000 !important;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 400 !important;

    @media screen and (max-width: 400px) {
      font-size: 15px !important;
    }
  }

  .text__live {
    text-align: center;
    margin-top: 24px;
  }

  .main-font {
    margin-top: 12px;

    @media screen and (max-width: 400px) {
      line-height: 1;
      margin-bottom: 8px;
    }
  }
`;

const animation = keyframes`
  0% { right: -300px; opacity: 0;}
  50% { right: 50px; opacity: 0.5;}
  100% {right: 0px; opacity: 1;};
`;

const animationLeft = keyframes`
  0% { left: -300px; opacity: 0;}
  50% { left: 50px; opacity: 0.5;}
  100% {left: 0px; opacity: 1;};
`;

export const styWithAnimation = (isActive) => css`
  position: relative;
  animation: ${isActive ? animation : animationLeft} 1s;
`;

export const styWrapperItem = css`
  h4 {
    color: #828282;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 0 4px 0;
  }

  blockquote {
    margin-top: 16px !important;
  }

  .infoName {
    font-size: 12px;
    text-transform: capitalize;
    letter-spacing: 2px;
    display: block;
  }

  .hide {
    display: none;
  }

  .active {
    diplay: block;
  }

  .description {
    font-size: 16px !important;
  }

  @media screen and (max-width: 400px) {
    .description {
      font-size: 14px !important;
    }
  }
`;

export const styButtonWrapper = css`
  display: flex;
  justify-content: center;

  .button-nav {
    font-size: 14px;
    padding: 5px 20px;
  }
`;

export const styForm = css`
  display: flex;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  border-radius: 20px;
  margin: 20px;
  padding: 30px;

  .button-nav {
    font-size: 14px;
    padding: 5px 20px;
  }
`;
