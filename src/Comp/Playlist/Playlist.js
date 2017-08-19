import React from 'react';
import './Playlist.css';
import TrackList from '../Comp/TrackList/TrackList';

class Playlist extends React.component{


    render(){
        return(
            <div className="Playlist">
                <input value="New Playlist"/>
                <!-- Add a TrackList component -->
                <a className="Playlist-save">SAVE TO SPOTIFY</a>
          </div>
        )
    }
}

export default Playlist;
