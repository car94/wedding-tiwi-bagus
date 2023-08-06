import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection() {
  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</span>
              <h2 className="main-font main-font__wedding">Akad Nikah dan Syukuran Pernikahan</h2>
              <span className="sub-title sub-title__wedding">Insha Allah akan diselenggarakan pada:</span>
            </div>
          </div>
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
                  title="Syukuran Pernikahan"
                  time="12.00 - 14.00 WIB"
                  date="Minggu, 03 September 2023"
                  description="Gedung PGSD, Kampus 3 Universitas Negeri Malang <br/>Jl. Ir. Soekarno No.1, Kepanjen Lor, Kec. Kepanjenkidul, Kota Blitar,
                  Jawa Timur 66117"
                />
                <ButtonLive />
              </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
