import React, { Fragment } from 'react';

function FooterSection() {
  return (
    <Fragment>
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

export default React.memo(FooterSection);
