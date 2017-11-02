import React from 'react';
import { withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {findValue: "", nearValue: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.findChange = this.findChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
 }



  handleSubmit(event) {
    event.preventDefault;
    this.props.history.push("/search");

  }

  findChange(event) {
    this.setState({findValue: event.target.value});
  }

  nearChange(event) {
    this.setState({nearValue: event.target.value});
  }



  render() {
    return(
      <form className={this.props.path === "/" ? "landing-form" : "serach-nav"} >
        <ul className={this.props.path === "/" ? "landing-form-ul" :"search-form-nav"}>

          <li className={this.props.path === "/" ? "find-text-land" :"find-text-nav"}>
            Find
          </li>
          <li className={this.props.path === "/" ? "find-input-land" :"find-input-field"}>
            <input className={this.props.path === "/" ? "land-input-find" :"nav-input-find"} onChange={this.findChange} value={this.state.findValue} text="type" placeholder="Restaurants"/>
          </li>
          <li className={this.props.path === "/" ? "land-seperator" : "seperator"}><div className={this.props.path === "/" ? "land-seperator-div" :"seperator-div"}></div></li>
          <li className={this.props.path === "/" ? "near-text-land" :"near-text-nav"}> Near</li>
          <li>
            <input  className={this.props.path === "/" ? "near-input-land" :"near-input-nav"} onChange={this.nearChange} value={this.state.nearValue} text="type" placeholder="Current Location" />
          </li>
          <li>
            <button className={this.props.path === "/" ? "mag-land" :"mag"} onClick={this.handleSubmit}><i className={this.props.path ==="/" ? "land-icon fa fa-search" : "icon fa fa-search" }></i></button>

          </li>
        </ul>
      </form>

    );
  }



}

export default withRouter(SessionForm);
