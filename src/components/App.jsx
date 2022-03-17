import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";
class App extends React.Component {
  state = {
    images: [],
  };

  onSearchSubmit = async (entry) => {
    entry = entry.replaceAll(" ", "+").trim();

    const res = await axios.get(
      `https://pixabay.com/api/?key=26179481-9120154a81f8290c975813920&q=${entry}&image_type=photo`
    );
    this.setState({ images: res.data.hits });
  };

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "30px",
        }}
      >
        <SearchInput onSearchSubmit={this.onSearchSubmit}></SearchInput>

        <ImageList images={this.state.images}></ImageList>
      </div>
    );
  }
}

export default App;
