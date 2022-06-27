import ImageGalleryItem from 'components/ImageGalleryItem';
import s from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.ImageGallery}>
      {images &&
        images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
