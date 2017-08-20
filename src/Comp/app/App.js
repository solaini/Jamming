import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


const playlistName = "Summer 2017";
const playlistTracks = [
      {name: 'Tiny Dancer',
      artist: 'Elton John',
      album: 'Unknown'
      },
      {name: 'ShellShock',
      artist: 'Blink 182',
      album: 'Red Paint'
      },
        {name: 'Baby Im amazed',
        artist: 'Rod Stewart',
        album: 'American Beauty'
      }
    ];

class App extends Component {
  constructor(props){
    super(props);
    
    //need to set the state to an array of objects?  searchResults to show multiple sets per below - double check
    this.state = {
          searchResults: [{
            name: '',
            artist: '',
            album: ''
          }]
        }
        

}

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult searchResults={this.state.searchResults}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
