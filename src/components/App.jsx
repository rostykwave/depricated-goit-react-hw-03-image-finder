import { Component } from "react";
// import ImageGallery from "./ImageGallery";
import Modal from "./Modal";
// import Searchbar from "./Searchbar";

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
        {/* <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery/> */}
        <button type="button" onClick={this.toggleModal}>Open modal</button>
        {showModal && <Modal>
          <img src="" alt="" />
          <button type="button" onClick={this.toggleModal}>Close</button>
        </Modal>}
      
      </>
    )
  };
}

export default App;