import React, { useState, useEffect } from 'react';
import WishesContainer from './WishesContainer';
import WishesCreate from './WishesCreate';
import axios from "axios";
import { styWrapper } from './styles';

function WishesSection() {
  const [wishes, setWishes] = useState([]);

  const fetchWishes = async () => {
    const response = await axios.get('https://tofftopeight.com/tiwi/public/api/wishes');
  
    setWishes(response.data.data);
  };

  const createWish = async (name, message) => {
    const response = await axios.post('https://tofftopeight.com/tiwi/public/api/wishes', {
        name,
        message
    });

    const updatedWishes = [
       ...wishes,
        response.data
    ];

    setWishes(updatedWishes);
};


useEffect(() => {
    fetchWishes();
}, []);

  return (
    <div id="fh5co-testimonial" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 style={{ fontFamily: 'Pacifico', color: 'black' }}>Wishes</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <WishesCreate onCreate={createWish} />
              <br></br>
              <WishesContainer wishes={wishes} />
              <br></br><br></br>
            </div>
          </div>
        </div>
      </div>
      <div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h3 className="main-font">With love, Tiwi & Bagus</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default WishesSection;
