import React from 'react';
import { string } from 'prop-types';

function WeddingInfoBox({ title, desc, location, time, description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
        <h2 style={{ fontFamily: 'Pacifico', fontSize: '2.5rem' }}>{title}</h2>
          <span style={{color: 'black', fontSize: '1.5rem'}}>{desc}</span>
          <span style={{color: 'black', fontSize: '1.75rem', marginTop: '10px' }}>{time}</span>
          <span style={{color: 'black', fontSize: '2rem', marginTop: '10px' }}>{location}</span>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin"></i>
            <span dangerouslySetInnerHTML={{ __html: description }} style={{color: 'black'}} />
          </div>
        )}
      </div>
    </div>
  );
}

WeddingInfoBox.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox);
