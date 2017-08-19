import React from 'react';
import './Track.css';

class Track extends React.Component{
    constructor(props){
        super(props);

    }
//Create a method called renderAction that displays a - anchor tag if a passed down property is true, 
//and a + anchor tag if the property is false. Set the class name to Track-action.
    let flag = '';
    renderAction() {
        passedProperty ? flag = '-' : flag = '+';
    }

    render(){
        return(
            <div className="Track">
            <div className="Track-information">
              <h3>{this.props.track.name}</h3>
              <p>{this.props.track.artist} | {this.props.track.album}</p>  {/*this is Step 35 correct?*/}
            </div>
            <a className="Track-action">{flag}</a> {/*Action number 27*/}
          </div>
        )
    }
}

export default Track;