import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';
import { styForm } from './styles';

function WishesCreate({ onCreate }) {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const [successHandleSubmit, setSuccessHandleSubmit] = useState(false);

  const handleSetName = (event) => {
    setName(event.target.value);
    };

    const handleSetMessage = (event) => {
        setMessage(event.target.value);
        };

    const handleSubmit = (event, showAlert = false) => {
        event.preventDefault();
        onCreate(name, message);
        setName('');
        setMessage('');
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
            <label for="nama" style={{ color: 'black' }}><strong>Nama</strong></label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              
            ></input>
            <label for="pesan"><strong>Pesan</strong></label>
            <textarea
              value={message}
              onChange={handleSetMessage}
              type="text"
              class="form-control"
              
            ></textarea>
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

export default WishesCreate;
