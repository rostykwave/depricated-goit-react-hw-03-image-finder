import s from './ImageGalleryItemItem.module.css';
// import PropTypes from 'prop-types';

const ImageGalleryItem = () => {
  return (
    <li className={s.ImageGalleryItem}>
      <img src="" alt="" className={s['ImageGalleryItem-image']} />
    </li>
  );
};

// ImageGalleryItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ImageGalleryItem;
