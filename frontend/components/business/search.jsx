import React from 'react';
import BusinessIndex from './business_index';
import BusinessMap from './business_map';


class Search extends React.Component {



  render() {
    return(

    <div>
      <BusinessMap />
      <BusinessIndex />
    </div>
  );
  }
}
