import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from './styles';

function FooterSection() {
  return (
    <Fragment>
        <div css={styWrapper}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                <h3 className="main-font">With love, Tiwi & Bagus</h3>
              </div>
            </div>
          </div>
        </div>
      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2023 Tiwi & Bagus Wedding. All Rights Reserved.</small>
                <small className="block">
                  Wedding Invitation created by{' '}
                  <a href="#" target="_blank" rel="noreferrer">
                    Turut Mengundang
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
