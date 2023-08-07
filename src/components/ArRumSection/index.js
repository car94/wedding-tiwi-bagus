import React, { Fragment } from 'react';
import { styWrapper } from './styles';

function ArRumSection() {
  return (
    <Fragment>
        <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <p className="info">
                "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir." <br />
                (Ar-Rum 30:21).
              </p>
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default React.memo(ArRumSection);
