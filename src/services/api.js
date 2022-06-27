import axios from 'axios';

const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
const url = `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

export const fetchImagesWithQuery = async searchQuery => {
  const response = axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => {
      console.log(data);
      console.log(data.hits);
      return data.hits;
    });
};
