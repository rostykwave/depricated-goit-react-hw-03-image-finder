import { Component } from 'react';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import Searchbar from './Searchbar';
import { fetchArticlesWithQuery } from 'services/api';

class App extends Component {
  state = {
    articles: [],
    isLoading: false,
    error: null,
    showModal: false,
  };

  async componentDidMount() {
    console.log('componentDidMount');
    this.setState({ isLoading: true });

    try {
      const articles = fetchArticlesWithQuery('cat');
      this.setState({ articles });
    } catch (error) {
      console.log('eroorr');
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  searchQuery = data => {
    console.log(data);
  };

  render() {
    const { showModal } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery />
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>

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
