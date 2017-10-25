
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

  usernameChange(event){
    this.setState({username: event.target.value});
  }

  passwordChange(event) {
    this.setState({password: event.target.value});
  }

  render(){
    const errs = this.props.errors.map((err) => {
      return <li>err</li>;
    });
    return(
    <div>
      <header>
        {this.props.formType === '/login' ? "Log In" : "Sign Up"}
        <Link to={this.props.formType === '/login' ? '/signup' : '/login'}>{this.props.formType === '/login' ? "Sign Up" : "Log In"}</Link>
        <ul>
          {errs}
        </ul>
      </header>

      <form onSubmit={this.handleSubmit}>
        <label> "Username: "
          <input type="text" onChage={this.emailChange} value={this.state.emailValue}/>
        </label>
        <br/>
        <label> "Password"
          <input type="password" onChange={this.passwordChange} value={this.state.password}/>
        </label>
      </form>
    </div>
  );
  }
}
