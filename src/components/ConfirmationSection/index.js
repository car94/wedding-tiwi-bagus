import React from 'react';
import { styWrapper, styFlex } from './styles';
import mandiri from '@assets/images/mandiri.png';
import btpn from '@assets/images/BTPN.png'

function ConfirmationSection() {
  return (
    <div id="fh5co-started" className="fh5co-bg" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 style={{ fontFamily: 'Pacifico', color: 'black' }}>Amplop Digital</h2>
            <br></br>
            <h5 style={{color: '#000'}}>
              Dengan tidak mengurangi rasa hormat, bagi anda yang ingin memberikan tanda kasih untuk kami, dapat melalui:
            </h5>
            <img src={mandiri} alt="groom" className="img-responsive" loading="lazy" style={{width: '50%', marginLeft: '100px'}} />
            <br></br>
            <h5 style={{color: '#000'}}>
              <strong>No. Rekening: 1710010404021</strong>
            </h5>
            <h5 style={{color: '#000'}}>
              <strong>R.M PERTIWI PUTRI GU</strong>
            </h5>
            <br></br>
            <img src={btpn} alt="groom" className="img-responsive" loading="lazy" style={{width: '35%', marginLeft: '120px'}} />
            <br></br>
            <h5 style={{color: '#000'}}>
              <strong>No. Rekening: 90350005219</strong>
            </h5>
            <h5 style={{color: '#000'}}>
              <strong>BAGUS MUHAMMAD HUSEIN</strong>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ConfirmationSection);
