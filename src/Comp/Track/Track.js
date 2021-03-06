import React from 'react';
import './Track.css';


class Track extends React.Component{
    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }
//Create a method called renderAction that displays a - anchor tag if a passed down property is true, 
//and a + anchor tag if the property is false. Set the class name to Track-action.

    renderAction() {
        if (this.props.isRemoval) {
        return <a className="Track-action" onClick={this.removeTrack}>-</a>
        }
        return <a className="Track-action" onClick={this.addTrack}>+</a>;
    }

    addTrack(track) {
        this.props.onAdd = this.props.track;//45 correct?
    }

    removeTrack(track){
        this.props.onRemove = this.props.track;
    }

    render(){
        return(
            <div className="Track">
            <div className="Track-information">
              <h3>{this.props.track.name}</h3>
              <p>{this.props.track.artist} | {this.props.track.album}</p>  {/*this is Step 35 correct?*/}
            </div>
            {this.renderAction}
          </div>
        )
    }
}

export default Track;