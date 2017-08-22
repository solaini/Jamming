import React, { Component } from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResult from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {
  constructor(props){
    super(props);
    
    //need to set the state to an array of objects?  searchResults to show multiple sets per below - double check
    this.state = {
          searchResults: [{
            name: '',
            artist: '',
            album: ''
          }],
          playlistName : "Summer 2017",
          playlistTracks : [
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
          ]
        }

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
    }

  addTrack (track) {
      if (this.state.playlistTracks !== track){
        let playList = this.state.playlistTracks.push(track);
        this.setState({playlistTracks: playList});  //Cmd 41, this does not seem like the correct way to implement
      }
  } 
  
  removeTrack (track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter((i) => i !== track)
    });
  }

  updatePlaylistName(name){
    this.setState({playlistName: name});
  }

  savePlaylist() {
    
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResult searchResults={this.state.searchResults}  onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} 
          onNameChange={this.updatePlaylistName}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
