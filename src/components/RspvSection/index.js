import React, { useState } from 'react';
import RspvCreate from './RspvCreate';
import axios from "axios";
import { styWrapper } from './styles';

function RspvSection() {
  const [rspv, setRspv] = useState([]);

  const createRspv = async (name, qty, confirmation) => {
    const response = await axios.post('https://tofftopeight.com/tiwi/public/api/rspv', {
        name,
        qty,
        confirmation
    });

    const updatedRspv = [
       ...rspv,
        response.data
    ];

    setRspv(updatedRspv);
};

  return (
    <div id="fh5co-testimonial" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 style={{ fontFamily: 'Pacifico', color: 'black' }}>Rspv</h2>
                <h5 style={{color: '#000'}}>
                    Bantu kami mempersiapkan jamuan yang hangat untuk anda semua dengan mengirimkan konfirmasi kehadiran melalui form berikut ini
                </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <RspvCreate onCreate={createRspv} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RspvSection;
