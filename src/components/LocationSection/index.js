import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';
import ButtonMaps from './ButtonMaps';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h3 className="main-font">Lokasi Acara</h3>
              <p className="sub-title">
                <a
                  href={GOOGLE_MAPS_LINK}
                  title="Click untuk melihat peta di Google Maps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#828282' }}
                >
                  <strong>Gedung PGSD, Kampus 3 Universitas Negeri Malang</strong>
                </a>{' '}
                <br />
                Jl. Ir. Soekarno No.1, Kepanjen Lor, Kec. Kepanjenkidul, Kota Blitar,
                Jawa Timur 66117
              </p>
            </div>
          </div>
        </div>
        <ButtonMaps />
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
