import { Component } from "react";
import ImageGallery from "./ImageGallery";
import Searchbar from "./Searchbar";

class App extends Component{

  state = {}

  searchQuery = data => {
    console.log(data);
  }
  
  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchQuery} />
        <ImageGallery/>
      </>
    )
  }
}

export default App;