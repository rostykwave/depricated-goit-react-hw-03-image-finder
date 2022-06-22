import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
import Searchbar from "./Searchbar";
// import { ReactComponent as SearchIcon } from '../icons/search.svg';

class App extends Component{

  state = {
    showModal: false,
  };

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
        <ImageGallery/>
        <button type="button" onClick={this.toggleModal}>Open modal</button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
          {/* <img src="" alt="" /> */}
            {/* <button type="button" onClick={this.toggleModal}>Close</button> */}
            <p>hello</p>
          </Modal>
        )}
      
      </>
    )
  };
}

export default App;