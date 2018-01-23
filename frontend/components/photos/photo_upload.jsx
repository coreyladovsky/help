import React from 'react';
import NavBar from '../NavBar/NavBar';
import  { Link } from 'react-router-dom';

class PhotoUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: null,
      loading: false
    };
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.photoText = this.photoText.bind(this);
    this.submitPhoto = this.submitPhoto.bind(this);
    this.spinSpinner = this.spinSpinner.bind(this);
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
              <div className="center-line"></div>
              <div className="ok-text">OR</div>
              <div className="center-line"></div>
            </li>
            <li className="browse-files">
              <div className="browse-files-button">Browse Files
                <input className="second-upload" type="file" accept="image/*" onChange={this.updateFile}/>
              </div>
            </li>
          </ul>
        </div>
      );

    }
  }

  spinSpinner() {
    if(this.state.loading) {
      return(
        <div className="spin-container">
          <div className="small-spin">
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
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

  submitPhoto() {
    if(!this.state.imageFile) {
      return "";
    } else {
      return(
        <button className="photo-submit-button" onClick={this.handleSubmit}>Add Photo</button>
      );
    }
  }

  handleSubmit(e) {
    let formData = new FormData();
    formData.append("photo[image]", this.state.imageFile);
    formData.append("photo[user_id]", this.props.currentUser.id);
    formData.append("photo[business_id]", this.props.business.id);
    this.setState({ loading: true });
    this.props.createPhoto(formData).then((res) => {
      this.setState({ loading: false });
      this.props.history.push(`/businesses/${this.props.business.id}/photos`);
    }, (res) => {
      this.setState({ loading: false });
    });

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
                <div className="all-photos-tag">
                  <Link to={`/businesses/${this.props.business.id}/photos`}>View all photos</Link>
                </div>
              </li>
              <li className="add-photo-text">
                Add Photos
              </li>
            </ul>
          </div>

        <form className="photo-form">
          <div className="image-upload">
            {this.photoText()}
            {this.spinSpinner()}
            <input className="image-uploaded" type="file" accept="image/*" onChange={this.updateFile}/>
            <img className="image-preview" src={this.state.imageUrl}/>
          </div>
          {this.submitPhoto()}
        </form>

      </div>

    </div>
    );
    }
  }
}


export default PhotoUpload;
