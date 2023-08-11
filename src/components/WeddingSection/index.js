import React, { Fragment } from 'react';

import WeddingInfoBox from './WeddingInfoBox';
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
                  title="Akad Nikah"
                  time="07.30 WIB"
                  date="Minggu, 03 September 2023"
                  description="Gedung PGSD, Kampus 3 Universitas Negeri Malang <br/>Jl. Ir. Soekarno No.1, Kepanjen Lor, Kec. Kepanjenkidul, Kota Blitar,
                  Jawa Timur 66117"
                />
                <WeddingInfoBox
                  title="Resepsi"
                  time="12.00 - 14.00 WIB"
                  date="Minggu, 03 September 2023"
                  description="Gedung PGSD, Kampus 3 Universitas Negeri Malang <br/>Jl. Ir. Soekarno No.1, Kepanjen Lor, Kec. Kepanjenkidul, Kota Blitar,
                  Jawa Timur 66117"
                />
              </div>
          </div>
        </div>
        <ButtonLive />
        <br></br>
        <CountTimerSection />
      </div>
    </Fragment>
  );
}


export default React.memo(WeddingSection);
