import s from './ImageGallery.module.css';
// import PropTypes from 'prop-types';

const ImageGallery = ({ data }) => {
  return <ul className={s.ImageGallery}>{console.log(data)}</ul>;
};

// ImageGallery.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     })
//   ),
// };

export default ImageGallery;
