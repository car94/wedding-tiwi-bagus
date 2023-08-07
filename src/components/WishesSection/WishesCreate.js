import React, { useState, Fragment } from 'react';
import useGuestData from '@/hooks/useGuestData';
import useWishesContext from '@/hooks/use-wishes-context';

function WishesCreate() {
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const { createWish } = useWishesContext();

  const handleSetName = (event) => {
    setName(event.target.value);
    };

    const handleSetMessage = (event) => {
        setMessage(event.target.value);
        };

    const handleSubmit = (event) => {
        event.preventDefault();
        createWish(name, message);
        setName('');
        setMessage('');
    };

  const { loading } = useGuestData();

  const renderContentType = () => {
      return (
        <Fragment>
            <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Nama</label>
            <input
              value={name}
              onChange={handleSetName}
              type="text"
              class="form-control"
              placeholder="Nama.."
            ></input>
            <label for="exampleInputEmail2">Pesan</label>
            <textarea
              value={message}
              onChange={handleSetMessage}
              type="text"
              class="form-control"
              placeholder="Pesan.."
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Send
          </button>
          </form>
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
