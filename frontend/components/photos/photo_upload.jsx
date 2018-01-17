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
    this.photoText = this.photoText.bind(this);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  photoText() {
    if(this.state.imageFile) {
      return "";
    } else {
      return(
        <div className="upload-text">
          <ul>
            <li>
              <h1>Drag and drop your photos here</h1>
            </li>
            <li className="ok-partition">
              <div class="center-line"></div>
              <div className="ok-text">OR</div>
              <div class="center-line"></div>
            </li>
            <li className="browse-files">
              <button className="browse-files-button">Browse Files</button>
            </li>
          </ul>
        </div>
      );

    }
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
    if(this.props.business === undefined) {
      return null;
    } else {

    return(
      <div>
        <NavBar currentUser={this.props.currentUser}
          intendedPage={this.props.intendedPage}
          logout={this.props.logout} nextPage={this.props.nextPage}
          clearPage={this.props.clearPage}/>
        <div className="photo-upload-container">
          <div className="biz-heading-photos">
            <ul className="photo-page-ul">
              <li>
                <div className="biz-name-photo">
                  <Link to={`/businesses/${this.props.business.id}`}>{this.props.business.name + ":"}</Link>
                </div>
              </li>
              <li className="add-photo-text">
                Add Photos
              </li>
            </ul>
            <div className="all-photos-tag">
              <Link to={`/businesses/${this.props.business.id}/photos`}>View all photos</Link>
            </div>
          </div>


        <div className="image-upload">
          {this.photoText()}
          <input className="image-uploaded" type="file" onChange={this.updateFile}/>
          <img className="image-preview" src={this.state.imageUrl}/>
        </div>

      </div>

    </div>
    );
    }
  }
}


export default PhotoUpload;
