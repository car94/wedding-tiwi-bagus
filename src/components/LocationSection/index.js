import React, { Fragment } from 'react';
import { GOOGLE_MAPS_LINK } from '@/constants';
import { styWrapper } from './styles';

function LocationSection() {
  return (
    <Fragment>
      <div id="fh5co-couple-story" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <h2 className="main-font">Lokasi Acara</h2>
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
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.0705618680036!2d112.17210639999999!3d-8.094287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ec6bfa9d4789%3A0xa16e92fd9fa01642!2sJl.%20Ir.%20Soekarno%20No.1%2C%20Kepanjen%20Lor%2C%20Kec.%20Kepanjenkidul%2C%20Kota%20Blitar%2C%20Jawa%20Timur%2066117!5e0!3m2!1sid!2sid!4v1691134531356!5m2!1sid!2sid"
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: '0' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Google Maps - Tiwi & Bagus Wedding Party"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default React.memo(LocationSection);
