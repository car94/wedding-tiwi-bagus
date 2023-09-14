import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
import WeddingInfoBox2 from './WeddingInfoBox2';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';
import CountTimerSection from '../CountTimerSection';

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="container">
          <div className="row">
              <div className="col-md-10 col-md-offset-1">
                <WeddingInfoBox
                  title="Akad Nikah & Resepsi"
                  desc="Telah dilaksanakan di:"
                  location="Blitar, Jawa Timur"
                />
                <WeddingInfoBox2
                  title="Ngunduh Mantu"
                  desc="Akan dilaksanakan pada:"
                  time="09.00 WIB - Selesai"
                  date="Minggu, 24 September 2023"
                  description="Kediaman mempelai pria, Jl. Lematang 3 No. 180 RT. 50 RW. 13, Kel. Lebung Gajah, Kec. Sematang Borang, Kota Palembang"
                />
              </div>
          </div>
        </div>
        <br></br>
        <CountTimerSection />
      </div>
    </Fragment>
  );
}


export default React.memo(WeddingSection);
