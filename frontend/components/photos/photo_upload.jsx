import React from 'react';
import NavBar from '../NavBar';
import  { Link } from 'react-router-dom';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
    <div>
      <NavBar currentUser={this.props.currentUser}
        intendedPage={this.props.intendedPage}
        logout={this.props.logout} nextPage={this.props.nextPage}
        clearPage={this.props.clearPage}/>
    </div>
  );
  }
}


export default PhotoUpload;
