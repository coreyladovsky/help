import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from './business_map';
import NavBar from '../NavBar/NavBar';



class Search extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }



  render() {

    return(

    <div>
      <NavBar business={this.props.business} currentUser={this.props.currentUser} logout={this.props.logout}/>

      <ul className="map-and-index-ul">
        <li>
          <BusinessIndex updateBounds={this.props.updateBounds} business={this.props.business} filters={this.props.filters} fetchBusinesses={this.props.fetchBusinesses}
          clearFilter={this.props.clearFilter} nextPage={this.props.nextPage}/>
        </li>

        <li className="biz-map-index-page">
          <BusinessMap business={this.props.business} filters={this.props.filters} />
        </li>
      </ul>

    </div>
  );
  }
}

export default Search;
