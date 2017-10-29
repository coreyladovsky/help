import React from 'react';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';

class BusinessShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId);
  }

  render() {

    return(
      <div>
          <NavBar currentUser={this.props.currentUser} intendedPage={this.props.intendedPage} logout={this.props.logout} nextPage={this.props.nextPage} clearPage={this.props.clearPage}/>


          <ul>
            <ul>
              <li>
                {this.props.business.name}
              </li>
              <li>
                <ul>
                  <li>
                    stars
                  </li>
                  <li>
                    #
                  </li>
                  <li>
                    reviews
                  </li>
                </ul>
                <ul>
                  <li>
                    dollar signs
                  </li>
                  <li>
                    {this.props.business.cuisine}
                  </li>
                </ul>
              </li>
            </ul>
            <li>
              <button>Write a Review</button>
            </li>
            <li>
              <button>Add Photo</button>
            </li>
          </ul>
          <div>
            Map Box
          </div>

          <div>
            <ul>
              <li>
                <Link to={"/business/photos"}>Picture 1</Link>
              </li>
              <li>
                <Link to={"/business/photos"}>Picture 2</Link>
              </li>
              <li>
                <Link to={"/business/photos"}>See all photos</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Mon
              </li>
              <li>
                Tue
              </li>
              <li>
                Wed
              </li>
              <li>
                Thur
              </li>
              <li>
                Fri
              </li>
              <li>
                Sat
              </li>
              <li>
                Sun
              </li>
            </ul>
          </div>
      </div>

    );
  }
}

export default BusinessShow;
