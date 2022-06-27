import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { fetchImagesWithQuery } from 'services/api';

class App extends Component {
  state = {
    // images: [],
    images: null,
    isLoading: false,
    error: null,
    showModal: false,
  };

  async componentDidMount() {
    console.log('componentDidMount');
    this.setState({ isLoading: true });

    setTimeout(() => {
      const searchQuery = 'cat';
      const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
      const url = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
      fetch(url)
        .then(res => res.json())
        .then(data => {
          // console.log(data.hits);
          const images = data.hits;
          this.setState({ images });
        })
        .finally(this.setState({ isLoading: false }));
    }, 1000);

    // try {
    //   // const images = fetchImagesWithQuery('cat');
    //   //  this.setState({ images });
    //   const searchQuery = 'cat';
    //   const KEY = '27289011-631f37c1ff3a5cbdb3c134909';
    //   const url = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    //   fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
    //       // console.log(data.hits);
    //       const images = data.hits;
    //       this.setState({ images });
    //     });
    // } catch (error) {
    //   console.log('eroorr');
    //   this.setState({ error });
    // } finally {
    //   this.setState({ isLoading: false });
    // }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  // searchQuery = query => {
  //   console.log(query);
  // };
  handleFormSubmit = query => {
    console.log(query);
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.images &&
          this.state.images.map(image => (
            <div>
              {image.id}
              <img src={image.previewURL} alt={image.tags}></img>
            </div>
          ))}
        {/* <ImageGallery data={this.state.images} /> */}
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <img src="" alt="" /> */}
            {/* <button type="button" onClick={this.toggleModal}>Close</button> */}
            <p>hello</p>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
