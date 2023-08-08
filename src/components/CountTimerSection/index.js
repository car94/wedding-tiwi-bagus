import React, { Fragment } from 'react';
import { styWrapper } from './styles';
import CountContainer from './CountContainer';

function CountTimerSection() {
  return (
    <Fragment>
        <div css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <CountContainer />
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default React.memo(CountTimerSection);
