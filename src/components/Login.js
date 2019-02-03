import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Api from "./services/api"
import "./login.css";

class Login extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormLogin = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const userToLogin={
      email: this.state.email,
      password: this.state.password
    }
    return Api.postLoginUser(userToLogin)
    .then(response => {
      console.log(response);
      alert(`Welcome to our Yogi Place`);
      this.props.history.push(`/feedlogin/${response._id}`)
    })
    .catch(err => console.log(err));

  };



  makeapicall = () => {

    const getURl = endPoint => {
      if (process.env.MONGOLAB_URI) return endPoint;
      return `http://localhost:3001${endPoint}`;
    };

    const body = {
      first: this.state.firstName,
      last: this.state.lastName,
      email: this.state.email
    };

    // we are sending the body to the back end via json
    return axios
      .get(getURl("/api/users"), body)
  };


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div className="container">
     <div className="card">
             <div className="card-body">
             <i class="fas fa-check"></i>
                 <form className="form"> 
                <div className="form-group"> 
                  <input
                  value={this.state.email}
                  name="email"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Email Address"
                  />
                  </div>
                  
                  <div className="form-group"> 
                  <input
                  value={this.state.password}
                  name="password"
                  onChange={this.handleInputChange}
                  type="text"
                  placeholder="Password"
                  />
                  </div>
             
                  <button onClick={this.handleFormLogin}>Login</button>
            </form>
                
            <div className="link">    
             <h6>Don't have an account?
             <Link to="/signup">
                 Signup
             </Link>
             </h6>
             </div>
             </div>
             </div>
             </div>
            
            
    );
  }
}

export default Login;
