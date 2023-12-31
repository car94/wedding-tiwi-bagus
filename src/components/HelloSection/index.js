import React, { Fragment } from 'react';

import Bride from '@assets/images/p-tiwi-3.jpg';
import Groom from '@assets/images/p-bagus-3.jpg';
import Bg from '@assets/images/foto-1.jpg'

import { styWrapper } from './styles';

function HelloSection() {

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
          <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h4 className="main-font">Bagus Muhammad Husein, S.T.</h4>
                <p className="parent-name">
                  Putra Ketiga Bapak Mulyadi Rajo Intan <br />& Ibu Yulizar Yasin
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="bride" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h4 className="main-font">R.M. Pertiwi Putri Gunawan, S.T., M.Sc.</h4>
                <p className="parent-name parent-name__top">
                  Putri Kedua Bapak Adi Gunawan Wibisono <br />& Ibu dr. Yudia Supradini (Almh.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={Bg} alt="groom" className="img-responsive" loading="lazy" />
    </Fragment>
  );
}

export default HelloSection;
