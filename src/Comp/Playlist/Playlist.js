import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component{
    constructor(props){
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

handleNameChange(e) {
    this.props.onNameChange(e.target.value);
}

    render(){
        return(
            <div className="Playlist">
                <input placeholder="New Playlist" onChange={this.handleNameChange}/>
                <h1>{this.props.playlistName}</h1> {/*Hardcoded playlist name*/}
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove}/>
                <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
          </div>
        )
    }
}

export default Playlist;
