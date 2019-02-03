import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    email: "",
    commentBox: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
     <div className="container">
     <br/>
            <div className="col-md-12" id="headerText">
            We would love to here from you! Let's talk about the website, cool new features, or your favorite yoga pose!
            </div>
      <br/>
      {/* //This creates a second row below for the form input// */}
            <br/>
            <div className="col-md-12">
                  <form className="form">
                        <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                        />

                        <div className="col-md-12"> 
                        <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                        />
                      </div>

                      <div className="col-md-12">
                        <input
                        value={this.state.email}
                        name="email"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Email Address"
                        />
                        </div>
                        
                        <div className="col-md-12">
                        </div>
                        {/* create an area for user comments */}
                        <div className="col-md-12">
                        <input
                        value={this.state.commentBox}
                        name="commentBox"
                        onChange={this.handleInputChange}
                        type="commentForm"
                        placeholder="Talk to us!"
                        />
                      
                        </div>
                        <button onClick={this.handleFormSubmit}>Submit</button>
                  </form>
            </div>
      
          </div>
      
            
    );
  }
}

export default Contact;
