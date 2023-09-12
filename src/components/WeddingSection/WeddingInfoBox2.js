import React from 'react';
import { string } from 'prop-types';
import ButtonMaps2 from './ButtonMaps2';

function WeddingInfoBox2({ title, desc, date, time, description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
        <h2 style={{ fontFamily: 'Pacifico', fontSize: '2.5rem' }}>{title}</h2>
        <div className="event-col">
          <span style={{color: 'black'}}>{desc}</span>
        </div>
        <div className="event-col">
          <i className="icon-clock"></i>
          <span style={{color: 'black'}}>{time}</span>
        </div>
        <div className="event-col">
          <i className="icon-calendar"></i>
          <span style={{color: 'black'}}>{date}</span>
        </div>
        {description && (
          <div className="event-col">
            <i className="icon-location-pin"></i>
            <span dangerouslySetInnerHTML={{ __html: description }} style={{color: 'black'}} />
          </div>
        )}
        <br />
        <ButtonMaps2 />
      </div>
    </div>
  );
}

WeddingInfoBox2.propTypes = {
  title: string.isRequired,
  date: string.isRequired,
  time: string.isRequired,
  description: string.isRequired,
};

export default React.memo(WeddingInfoBox2);
