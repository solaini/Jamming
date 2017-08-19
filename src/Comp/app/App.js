import React, { Component } from 'react';
import './App.css';
import SearchBar from './Comp/SearchBar/SearchBar';
import SearchResult from './Comp/SearchResults/SearchResults';
import Playlist from './Comp/Playlist/Playlist';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult />
          <Playlist />
        </div>
      </div>
    </div>
    );
  }
}

export default App;
