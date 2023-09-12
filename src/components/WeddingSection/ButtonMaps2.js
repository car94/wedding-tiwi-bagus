import React from 'react';

import { styButtonWrapper } from './styles';

function ButtonMaps2() {
  return (
    <div className="row">
      <div className="col-md-12">
        <a href="https://goo.gl/maps/xWJcmiGYaa8NzwJi8" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <span>Google Maps</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonMaps2);