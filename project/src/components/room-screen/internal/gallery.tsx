import {Offer} from '../../../types/offers';

type GalleryProps = {
  offer: Offer;
}

/* Галлерея изображений */
function Gallery({offer: {images}}: GalleryProps): JSX.Element {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.map((image, idx) => (
          <div className="property__image-wrapper" key={image}>
            <img
              className="property__image"
              src={image}
              alt="Studio"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
