import React, { useState } from 'react';
import { styWrapper } from './styles';
import mandiri from '@assets/images/mandiri.png';
import btpn from '@assets/images/logo-bank-sumsel.png'

function AmplopSection() {
  const [successCopyMandiri, setSuccessCopyMandiri] = useState(false);
  const [successCopyBtpn, setSuccessCopyBtpn] = useState(false);

  const handleCopyMandiri = async (text, showAlert = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopyMandiri(true);
      showAlert && alert('Berhasil');
    } catch (err) {
      setSuccessCopyMandiri(false);
      alert('Failed to copy! :(');
    }
  };

  const handleCopyBtpn = async (text, showAlert = false) => {
    try {
      await navigator.clipboard.writeText(text);
      setSuccessCopyBtpn(true);
      showAlert && alert('Berhasil');
    } catch (err) {
      setSuccessCopyBtpn(false);
      alert('Failed to copy! :(');
    }
  };

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
            <img src={btpn} alt="bank-sumsel-logo" className="img-responsive" loading="lazy" style={{width: '50%', marginLeft: '100px'}} />
            <br></br>
            <h5 style={{color: '#000'}}>
              <strong>No. Rekening: 14809008066</strong>
            </h5>
            <h5 style={{color: '#000'}}>
              <strong>BAGUS MUHAMMAD HUSEIN</strong>
            </h5>
            <div className="col-md-4 col-md-offset-4">
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopyBtpn(14809008066)}
              >
                {successCopyBtpn ? 'Tersalin' : 'Salin'}
              </button>
            </div>
            <br></br>
            <img src={mandiri} alt="bank-mandiri-logo" className="img-responsive" loading="lazy" style={{width: '50%', marginLeft: '100px'}} />
            <br></br>
            <h5 style={{color: '#000'}}>
              <strong>No. Rekening: 1710010404021</strong>
            </h5>
            <h5 style={{color: '#000'}}>
              <strong>R.M PERTIWI PUTRI GU</strong>
            </h5>
            <div className="col-md-4 col-md-offset-4">
              <button
                type="button"
                className="btn btn-default btn-xs"
                style={{ marginLeft: '8px' }}
                onClick={() => handleCopyMandiri(1710010404021)}
              >
                {successCopyMandiri ? 'Tersalin' : 'Salin'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(AmplopSection);
