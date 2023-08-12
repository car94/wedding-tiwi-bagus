import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { photos } from './photo-data';
import { styWrapper } from './styles';
import teaser from '@assets/video/tiwi-prewedding.mp4';
import thumb from '@assets/images/thumb.jpg';

function PhotoSection() {
  const Video = () => {
    return (
      <video muted controls width="100%" poster={thumb}>
        <source src={teaser} type="video/mp4"
        />
        Sorry, your browser doesn't support videos.
      </video>
    );
  };

  return (
    <div id="fh5co-testimonial" className="fh5co-section-gray" css={styWrapper}>
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 style={{ fontFamily: 'Pacifico', color: 'black' }}>Gallery</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">{Video()}</div>
          </div>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
