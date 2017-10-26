
import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      passwordValue: "",
      firstNameValue: "",
      lastNameValue: "",
      monthValue: "",
      dayValue: "",
      yearValue: "",
      zipCodeValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.monthChange = this.monthChange.bind(this);
    this.dayChange = this.dayChange.bind(this);
    this.yearChange = this.yearChange.bind(this);
    this.zipCodeChange = this.zipCodeChange.bind(this);
    this.guestLogIn = this.guestLogIn.bind(this);
    this.littleMessage = this.littleMessage.bind(this);
  }

  componentWillReceiveProps() {

  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.props.formType === "login"){
      this.props.processForm({email: this.state.emailValue, password: this.state.passwordValue});
    } else {
      this.props.processForm({
        email: this.state.emailValue,
        password: this.state.passwordValue,
        first_name: this.state.firstNameValue,
        last_name: this.state.lastNameValue,
        birthday: `${this.state.yearValue}-${this.state.monthValue}-${this.state.dayValue}`,
        zip_code: this.state.zipCodeValue
      });
    }
  }

  emailChange(event){
    this.setState({emailValue: event.target.value});
  }

  passwordChange(event) {
    this.setState({passwordValue: event.target.value});
  }

  firstNameChange(event) {
    this.setState({firstNameValue: event.target.value});
  }

  lastNameChange(event) {
    this.setState({lastNameValue: event.target.value});
  }

  monthChange(event) {
    this.setState({monthValue: event.target.value});
  }

  dayChange(event) {
    this.setState({dayValue: event.target.value});
  }

  yearChange(event) {
    this.setState({yearValue: event.target.value});
  }

  zipCodeChange(event) {
    this.setState({zipCodeValue: event.target.value});
  }

  nameInputs() {
    return (
        <ul className="name-inputs">
          <li>
            <input type="text" className="first-name" placeholder="First Name" value={this.state.firstNameValue}
            onChange={this.firstNameChange}/>
          </li>
          <li>
            <input type="text" className="last-name" placeholder="Last Name" value={this.state.lastNameValue}
            onChange={this.lastNameChange}/>
          </li>
        </ul>
    );
  }

  zipCodeInput() {
    return (
      <li>
        <input type="text" className="zip-code" placeholder="Zip Code" value={this.state.zipCodeValue}
        onChange={this.zipCodeChange}/>
      </li>
    );
  }

  dropDownYear() {
    let year = new Date().getFullYear();
    let years = [];
    for(let i = year; i > 1900; i--){
      years.push(i);
    }
    return years.map((yr, idx) => {
      return <option key={idx}>{yr}</option>;
    });
  }

  dropDownMonth() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months.map((month, idx) => {
      return <option key={idx}>{month}</option>;
    });
  }

  dropDownDay() {
    let days = [];
    for(let i = 1; i < 32; i++){
      days.push(i);
    }
    return days.map((day, idx) => {
      return <option key={idx}>{day}</option>;
    });
  }

  allDropDowns() {
    return (
      <div>
        <ul className="birthday-text">
          <li className='birthday'>Birthday</li>
          <li className='optional'>Optional</li>
        </ul>

          <ul className="drop">
            <li>
              <select className="MonthDrop all-drop" onChange={this.monthChange}>
                <option defaultValue>Month</option>
                {this.dropDownMonth()}

              </select>
            </li>
            <li>
              <select className="DayDrop all-drop" onChange={this.dayChange}>
                <option defaultValue>Day</option>
                {this.dropDownDay()}
              </select>
            </li>
          <li>
            <select className="YearDrop all-drop" onChange={this.yearChange}>
              <option defaultValue> Year</option>
              {this.dropDownYear()}
            </select>
          </li>
          </ul>
        </div>
    );
  }

  guestLogIn() {
    this.props.login({email: "Guest", password: "password"});
  }

  littleMessage() {
    if(this.props.formType === '/login') {
      return (
        <ul className="little-message">
          <li>
            <h3> New to Help? </h3>
          </li>
          <li>
            <Link to={'/signup'}>Sign Up</Link>
          </li>
        </ul>
      );
    } else{
      return(
        <p className="little-message">Connect with great local restaurants</p>
      );
    }
  }



  render(){
    const errs = this.props.errors.map((err) => {
      return <li>{err}</li>;
    });


    return(
    <div>
      <header className="top-red-bar-with-star">
        <div className="help-div">

          <Link to={'/help'} className="help">

            help

        </Link>
      </div>

        <ul>
          {errs}
        </ul>
      </header>
      <section>
        <h2 className="login-signup-string">
          {this.props.formType === '/login' ? "Log In to Help" : "Sign Up for Help"}

        </h2>
        {this.littleMessage()}

      <form onSubmit={this.handleSubmit} className="auth-form">
        <ul className="auth-list">
          <li>
            {this.props.formType === "/signup" ? this.nameInputs() : ""}
          </li>
          <li>
            <input type="text" className="email" onChange={this.emailChange} value={this.state.emailValue}
              placeholder="Email"/>
          </li>
          <li>
            <input type="password" className="password" onChange={this.passwordChange} value={this.state.passwordValue}
              placeholder="Password"/>
          </li>
          {this.props.formType === "/signup" ? this.zipCodeInput() : ""}
          {this.props.formType === "/signup" ? this.allDropDowns() : ""}
        </ul>



        <button className="submit-button">{this.props.formType === '/login' ? "Log In" : "Sign Up"}</button>

      </form>
        <button onClick={this.guestLogIn}>Guest Log In</button>
        <Link to={this.props.formType === '/login' ? '/signup' : '/login'}>{this.props.formType === '/login' ? "Sign Up" : "Log In"}</Link>
      </section>
    </div>
  );
  }
}

export default SessionForm;
