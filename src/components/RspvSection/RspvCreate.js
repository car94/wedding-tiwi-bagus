import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';
import { styForm } from './styles';

function RspvCreate({ onCreate }) {
  const [name, setName] = useState();
  const [qty, setQty] = useState();
  const [confirmation, setConfirmation] = useState();
  const [successHandleSubmit, setSuccessHandleSubmit] = useState(false);

  const handleSetName = (event) => {
    setName(event.target.value);
    };

    const handleSetQty = (event) => {
        setQty(event.target.value);
    };

    const handleSetConfirmation = (event) => {
      setConfirmation(event.target.value);
    }

    const handleSubmit = (event, showAlert = false) => {
        event.preventDefault();
        onCreate(name, qty, confirmation);
        setName('');
        setQty('');
        setConfirmation('');
        setSuccessHandleSubmit(true);
        showAlert && alert('Berhasil');
    };

  const { loading } = useGuestData();

  const renderContentType = () => {
      return (
        <Fragment>
          <div css={styForm}>
          <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="nama"><strong>Nama</strong></label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              placeholder='Nama'
              
            ></input>
            <label for="jumlah"><strong>Jumlah Tamu</strong></label>
            <select class="form-control" onChange={handleSetQty}>
              <option value="0">Jumlah Tamu</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <label for="konfirmasi"><strong>Konfirmasi Kehadiran</strong></label>
            <select class="form-control" onChange={handleSetConfirmation}>
              <option value="">Konfirmasi Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
          {successHandleSubmit ? 'Terkirim' : 'Send'}
           
          </button>
          </form>
          </div>
        </Fragment>
      );
  };

  return (
    <div>
      {!loading && (
        <Fragment>
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <div class="form-group">
              </div>
              {renderContentType()}
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default RspvCreate;
