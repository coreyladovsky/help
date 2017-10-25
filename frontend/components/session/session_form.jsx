
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
      birthdayValue: "",
      zipCodeValue: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.firstNameChange = this.firstNameChange.bind(this);
    this.lastNameChange = this.lastNameChange.bind(this);
    this.birthdayChange = this.birthdayChange.bind(this);
    this.zipCodeChange = this.zipCodeChange.bind(this);
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
        birthday: this.state.birthdayValue,
        zip_code: this.state.zipCodeValue
      });
    }
  }

  emailChange(event){
    this.setState({emailValue: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  firstNameChange(event) {
    this.setState({firstNameValue: event.target.value});
  }

  lastNameChange(event) {
    this.setState({lastNameValue: event.target.value});
  }

  birthdayChange(event) {
    this.setState({birthdayValue: event.target.value});
  }

  zipCodeChange(event) {
    this.setState({zipCodeValue: event.target.value});
  }

  nameInputs() {
    return (
        <ul className="name-inputs">
          <li>
            <input type="text" placeholder="First Name" value={this.state.firstNameValue}
            onChange={this.firstNameChange}/>
          </li>
          <li>
            <input type="text" placeholder="Last Name" value={this.state.lastNameValue}
            onChange={this.lastNameChange}/>
          </li>
        </ul>
    );
  }

  zipCodeInput() {
    return (
      <li>
        <input type="text" placeholder="Zip Code" value={this.state.zipCodeValue}
        onChange={this.zipCodeChange}/>
      </li>
    );
  }

  dropDownYear() {
    let year = new Date().getFullYear();
    let years = [];
    while(years > 1900) {
      years.push(year);
      year-- ;
    }
    years.map( (yr) => {
      return <option>{yr}</option>;
    });
  }

  dropDownMonth() {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    months.map(month => {
      return <option>{month}</option>;
    });
  }

  dropDownDay() {
    let days = [];
    for(let i = 1; i < 32; i++){
      days.push(i);
    }
    days.map(day => {
      return <option>{day}</option>;
    });
  }

  allDropDowns() {
    return (
      <div>
        <ul className="birthday-text">
          <li className='birthday'>"Birthday"</li>
          <li className='optional'>"Optional"</li>
        </ul>

          <ul>
            <li>
              <select className="MonthDrop">
                <option default selected>"Month"</option>
                {this.dropDownMonth}
              </select>
            </li>
            <li>
              <select className="DayDrop">
                <option default selected>"Day"</option>
                {this.dropDownDay}
              </select>
            </li>
          <li>
            <select className="YearDrop">
              <option default selected> Year</option>
              {this.dropDownYear}
            </select>
          </li>
          </ul>
        </div>
    );
  }



  render(){
    const errs = this.props.errors.map((err) => {
      return <li>err</li>;
    });

    return(
    <div>
      <header>
        {this.props.formType === '/login' ? "Log In" : "Sign Up"}

        <ul>
          {errs}
        </ul>
      </header>

      <form onSubmit={this.handleSubmit}>
        <ul>
          <li>
            {this.props.formType === "signup" ? this.nameInputs : ""}
          </li>
          <li>
            <input type="text" onChage={this.emailChange} value={this.state.emailValue}
              placeholder="Email"/>
          </li>
          <li>
            <input type="password" onChange={this.passwordChange} value={this.state.password}
              placeholder="Password"/>
          </li>
          {this.props.formType === "signup" ? this.zipCodeInput : ""}
          {this.props.formType === "signup" ? this.allDropDowns : ""}
        </ul>



        <button className={"submitButton"}>{this.props.formType === '/login' ? "Log In" : "Sign Up"}</button>

      </form>
        <Link to={this.props.formType === '/login' ? '/signup' : '/login'}>{this.props.formType === '/login' ? "Sign Up" : "Log In"}</Link>
    </div>
  );
  }
}
