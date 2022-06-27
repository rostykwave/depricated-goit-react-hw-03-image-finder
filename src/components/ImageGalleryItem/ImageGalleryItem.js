import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem} id={id}>
      <img src={webformatURL} alt="" className={s['ImageGalleryItem-image']} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
