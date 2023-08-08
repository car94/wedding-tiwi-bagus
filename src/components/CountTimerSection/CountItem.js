import React from 'react';
import { number, string } from 'prop-types';
import { styWrapperCount } from './styles';

function CountItem({ number, text }) {
  return (
    <div css={styWrapperCount}>
      <h3 style={{ color: 'white' }}>{number}</h3>
      <span style={{ fontSize: '8px', color: 'white' }}>{text}</span>
    </div>
  );
}

CountItem.propTypes = {
  number: number.isRequired,
  text: string.isRequired,
};

export default React.memo(CountItem);
