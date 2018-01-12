import React from 'react';
import NavBar from '../NavBar';
import  { Link } from 'react-router-dom';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("bussiness[image]", this.state.imageFile);
  }

  render() {

    return(
    <div>
      <NavBar currentUser={this.props.currentUser}
        intendedPage={this.props.intendedPage}
        logout={this.props.logout} nextPage={this.props.nextPage}
        clearPage={this.props.clearPage}/>

      <div className="image-upload">
        <input type="file" onChange={this.updateFile}/>
        <img src={this.state.imageUrl}/>
      </div>

    </div>
  );
  }
}


export default PhotoUpload;
