import React from 'react';

import { styButtonWrapper } from './styles';

function ButtonMaps() {
  return (
    <div className="row">
      <div className="col-md-12">
        <a href="https://www.google.com/maps/place/Gedung+PGSD/@-8.0954978,112.1691673,17z/data=!3m1!4b1!4m6!3m5!1s0x2e78ec6c0d190d67:0x32bad3884c2afc29!8m2!3d-8.0955031!4d112.1717422!16s%2Fg%2F11c6rh93zt?entry=ttu" target="_blank" rel="noreferrer">
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

export default React.memo(ButtonMaps);