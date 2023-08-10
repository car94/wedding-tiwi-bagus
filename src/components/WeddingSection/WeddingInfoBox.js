import React from 'react';
import { string } from 'prop-types';
import ButtonMaps from './ButtonMaps';

function WeddingInfoBox({ title, date, time, description }) {
  return (
    <div className="col-md-6 col-sm-6 text-center">
      <div className="event-wrap">
        <h2 style={{ fontFamily: 'Pacifico' }}>{title}</h2>
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
        <ButtonMaps />
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
