import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {findValue: "", nearValue: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findChange = this.findChange.bind(this);
    this.nearChange = this.nearChange.bind(this);
  }

  handleSubmit(event) {

  }

  findChange(event) {
    this.setState({findValue: event.target.value});
  }

  nearChange(event) {
    this.setState({nearValue: event.target.value});
  }

  render() {
    return(
      <div>
        <header className="red-nav-bar">
        <ul className="top-nav-search">
          <li>
              <div className="help-div help-nav-div">
                <Link to={'/'} className="help">help</Link>
              </div>
          </li>
          <form>

          <li className="find-text-nav">
            Find
          </li>
          <li className="find-input-field">
            <input onChange={this.findChange} value={this.state.findValue} text="type" placeholder="Restaurnts"/>
          </li>
          <li className="find-text-nav near-text-nav"> Near</li>
          <li>
            <input onChange={this.nearChange} value={this.state.nearValue} text="type" placeholder="Current Location" />
          </li>
          <li>
            <button onClick={this.handleSubmit}>Mag</button>
          </li>
            </form>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
        </ul>

        </header>
      </div>

    );
  }
}

export default NavBar;
